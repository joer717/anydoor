const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
/*const config = require('../config/defaultConfig');*/
const  compress = require('./compress')
const range = require('./range')
const mime = require('./mime')
//用绝对路径做拼接 __dirname他所在的文件夹 + 相对文件路径
const tplPath = path.join(__dirname,'../template/dir.html')//拼接一个绝对路径
//读出来文件
const  source = fs.readFileSync(tplPath);//同步方法，只执行一次，以后用缓存 buffer
//Handlebars的compile方法
const template = Handlebars.compile(source.toString());//把buffer转成字符串
module.exports = async function (req,res,filePath,config) {
    try{
        const  stats = await stat(filePath);//异步调用
        if(stats.isFile()){//如果是文件，就读文件的内容
            const contentType = mime(filePath)
            res.statusCode=200;
            res.setHeader('Content-Type',contentType);
/*            const {start,end,code} = range(stats.size,req,res);
            //请求范围
            if (code === 200){
                rs=fs.createReadStream(filePath)
            } else{
                rs=fs.createReadStream(filePath,{stats,end})
            }*/
            //压缩
            let rs = fs.createReadStream(filePath)
            if(filePath.match(config.compress)){
                rs = compress(rs,req,res)
            }
              rs.pipe(res)
        }else if(stats.isDirectory()){//如果是文件夹，就读出内部文件夹
            const files = await readdir(filePath)//异步调用必须用await
            res.statusCode=200;
            res.setHeader('Content-Type','text/html');
            const dir = path.relative(config.root,filePath)
            const data = {
                files:files.map(file=>{
                    return{
                        file ,
                        icon:mime(file)
                    }
                }),
                dir:dir?`/${dir}`:'',//一个路径相对于另一个路径的相对地址
                title:path.basename(filePath)//用全路径取出文件名
            }
            res.end(template(data))
            //res.end(files)
        }
    }catch (err) {
        ///console.error(err);
        res.statusCode =206;
        res.setHeader('Content-Type','text/html')
        res.end(`${filePath} 不是一个文件或者文件夹`)
    }
}