const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost/foo', {//此处改为bar可以尝试bar
    perMessageDeflate: false
})
ws.on('open', function () {
    console.log("opened")
    ws.send("open ")
})
var askCount = 0
ws.on("message", function (data) {
    console.log(`服务器说：${data}`)
    if (askCount < 10) {
        ws.send("你知道什么了")
        askCount++
    }
})
ws.on("error", function (err) {
    console.log(err)
})