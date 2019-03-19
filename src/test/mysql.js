var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     : 3306,
    password : '123456',
    database : 'test',
});
//数据可连接
connection.connect();
//sql语句
var sql = 'SELECT * FROM websites'

connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log('-----------select---------')
    console.log('The solution is: ', results);
    console.log('--------------------------')
});

