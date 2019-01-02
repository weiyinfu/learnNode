/**
 * 本程序来一个大杂烩
 * 一个http端口上，绑定1个http应用+2个ws服务
 *
 * ws和http之所以能够绑定在同一个端口上，是因为ws是基于http的，是http的升级版本
 * */

http = require('http')
ws = require("ws")
url = require("url")

/**
 * http请求照样调用request，这个函数相当于java里面的servlet
 * */
function onRequest(request, response) {
    response.write("haha")
    response.end()//如果不调用end，请求一直不返回
}

server = http.createServer(onRequest)
wsServer1 = new ws.Server({noServer: true})//使用现有服务
wsServer2 = new ws.Server({noServer: true})
wsServer1.on("connection", function (conn) {
    console.log("connection ")
    conn.on("message", function (msg) {
        console.log(`[wsServer1]客户端说：${msg}`)
        conn.send("[wsServer1]我知道了")
    })
})
wsServer2.on("connection", function (conn) {
    console.log("connection wsServer2")
    conn.on("message", function (msg) {
        console.log(`[wsServer2]客户端说：${msg}`)
        conn.send("[wsServer2]我知道了")
    })
})
server.on('upgrade', function upgrade(request, socket, head) {
    const pathname = url.parse(request.url).pathname;
    if (pathname === '/foo') {
        wsServer1.handleUpgrade(request, socket, head, function done(conn) {
            wsServer1.emit('connection', conn, request);
        });
    } else if (pathname === '/bar') {
        wsServer2.handleUpgrade(request, socket, head, function done(conn) {
            wsServer2.emit('connection', conn, request);
        });
    } else {
        console.log("没有这样的wss处理器")
        socket.destroy();
    }
});

server.listen(80, function () {
    console.log("started")
})
