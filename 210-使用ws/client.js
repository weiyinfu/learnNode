const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080', {
    perMessageDeflate: false
})
ws.on('open', function () {
    ws.send("open ")
})
ws.on("message", function (data) {
    console.log(`服务器说：${data}`)
})