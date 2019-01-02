net = require("net")
console.log("服务器已启动")
net.createServer(function (conn) {
    conn.on("data", function (data) {
        console.log(typeof data)
        console.log(data.toString('utf8'))
        conn.write("我是服务器")
    })
}).listen(80)
