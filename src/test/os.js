var os = require("os")
os.tmpdir();
console.log(os.tmpdir())
console.log(os.endianness())
console.log(os.hostname())
console.log(os.type())
console.log(os.uptime())
// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.");