var child_process = require("child_process")
var iconv = require("iconv-lite")
var x = child_process.exec("java")
/**
 * exec默认data是string类型
 * */
x.stderr.on("data", function (data) {
    console.log(typeof  data)
    data = Buffer.from(data)
    data = iconv.decode(data, 'gbk')
    console.log(typeof data)
    console.log(data)
})