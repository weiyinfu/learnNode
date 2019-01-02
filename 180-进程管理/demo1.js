var util = require("util")
//使用iconv实现gbk转码成utf8
var iconv = require("iconv-lite")
var child_process = require("child_process")
console.log(util.format("one=%d two=%d", 1, 2))
var child = child_process.spawn("cmd", ['dir'])
child.stdout.on("data", function (data) {
    data = iconv.decode(data, 'gbk')
    console.log(data)
})
child.on('close', function (exitCode) {
    console.log(exitCode)
})
