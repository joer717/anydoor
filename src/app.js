const http = require('http');
const path = require('path');
const chalk = require('chalk');
const route = require('./helper/route')
const conf = require('./config/defaultConfig.js');//默认参数
const openUrl = require('./helper/open')
class Server {
    constructor(config){//用户设置的自定义参数
        this.conf = Object.assign({},conf,config)//合并对象
    }
    start(){
        const  server = http.createServer((req,res)=>{

            if(req.url!=="/favicon.ico"){
                console.log("打印----"+req.url)
                const filePath = path.join(this.conf.root,req.url);
                route(req,res,filePath,this.conf)
            }


        })
        server.listen(this.conf.port,this.conf.hostname,()=>{

            const addr = `http://${this.conf.hostname}:${this.conf.port}`
            console.info(`server started at ${chalk.green(addr)}`)
            openUrl(addr)
        })
    }
}

module.exports = Server;
