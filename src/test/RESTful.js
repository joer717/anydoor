var express = require('express');
var app = express();
var fs = require("fs");
/*//获取用户列表
app.get('/listUsers',function(req,res){
    console.log(__dirname)
    fs.readFile(__dirname+"/"+"../dataJson/users.json","utf-8",function(err,data){
       console.log(data)
        res.end(data)
    })
})
//添加的新用户数据
var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}
//添加用户
app.get('/addUser',function (req,res) {
    //读取已存在的数据，把新数据加进去
    fs.readFile(__dirname+"/"+"../dataJson/users.json","utf-8",function(err,data){
        console.log(data)
        data = JSON.parse(data)//把data转为对象
        data["user4"] = user["user4"]
        // res.end要传一个string获取buffer
        //所以要把对象转为字符串
        res.end(JSON.stringify(data));
    })
})
//查询用户
app.get('/:id',function (req,res) {
    //读取已存在的数据，把新数据加进去
    fs.readFile(__dirname+"/"+"../dataJson/users.json","utf-8",function(err,data){
        console.log(data)
        data = JSON.parse(data)//把data转为对象
        //获取数据中查询的用户
        var user = data["user"+req.params.id]
        // res.end要传一个string获取buffer
        //所以要把对象转为字符串
        res.end(JSON.stringify(user));
    })
})*/
//删除用户
var id = 2;
app.get('/deleteUser',function (req,res) {
    //读取已存在的数据，把新数据加进去
    fs.readFile(__dirname+"/"+"../dataJson/users.json","utf-8",function(err,data){

        data = JSON.parse(data)//把data转为对象
        //获取数据中查询的用户
        delete data["user"+2]
        console.log(data["user"+2])
        // res.end要传一个string获取buffer
        //所以要把对象转为字符串
        res.end(JSON.stringify(data));
    })
})
var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})