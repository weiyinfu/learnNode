fs = require("fs")
//fs.readFileSync()返回结果是一个buffer，相当于byte[]
res = fs.readFileSync('input.txt')
fs.writeFileSync('output.txt', res)
console.log(res.toString('utf8'))
console.log(process)