var fs = require("fs");
var buf = new Buffer.alloc(1024)


// 异步打开文件
/*
console.log("准备打开文件！");
fs.open('src/test/input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("文件打开成功！");
});*/
//写入文件
/*
fs.writeFile('src/test/input.txt','我正在学node，这个内容就是node写进去的哦',function(err){
      if(err){
          return console.log(err)
      }
      console.log("写入完成");
      fs.readFile('src/test/input.txt',function (err,data) {
          if(err){
              return console.log(err)
          }
          console.log('异步读取文件内容:'+data)
      })
    }
)*/
//读取文件
/*
fs.open('src/test/input.txt','r+',function(err,fd){
    if(err){
        return console.log(err)
    }
    fs.ftruncate(fd,10,function(err){
        if(err){
            console.log(err)
        }
    })
    console.log("文件截取成功")
    console.log("继续读取文件")
    //读取文件
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(err)
        }
        console.log(bytes+'字节被读取');
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString())
        }
        //关闭文件
        fs.close(fd, function(err){
            if (err){
                console.log(err);
            }
            console.log("文件关闭成功");
        });
    })

})*/
//删除文件
/*
fs.unlink('src/test/input.txt',function (err) {
    if(err){
        return console.log(err)
    }
    console.log("文件删除成功")
})*/
//创建目录
// fs.mkdir('src/nodeTest',function (err) {
//     if(err){
//         return console.log(err)
//     }
//     console.log('目录创建成功')
// })
//读取目录
/*
fs.readdir('src/',function(err,files){
    if(err){
         return console.log(err)
    }
    files.forEach(function(file){
        console.log(file)
    })
})*/
