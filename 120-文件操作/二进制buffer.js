fs = require('fs')
res = fs.readFileSync('input.txt')
res = res.toString('utf8')
console.log(res)

buf = new Buffer(res)//二进制内容复制
//二进制内容创建
var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f])
//字符串转换为二进制
var bin = new Buffer('hello', 'utf-8')

/**
 * Buffer与字符串有一个重要区别。
 * 字符串是只读的，并且对字符串的任何修改
 * 得到的都是一个新字符串，原字符串保持不变。
 * 至于Buffer，更像是可以做指针操作的C语言数组。
 * */
