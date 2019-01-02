/**
 * net模块用于创建socket客户端
 * HTTP是基于TCP的，它是一种非常简单的协议
 * 下面使用TCP实现HTTP
 * */
net = require("net")
url = require("url")
var port = 80
console.log("请访问如下链接")
console.log(url.format({
    protocol: "http",
    host: "localhost",
    port: port
}))
net.createServer(function (conn) {
    var html = "<h1>Hello World</h1>"
    conn.on('data', function (data) {
        conn.write([
            'HTTP/1.1 200 OK',
            'Content-Type: text/html',
            'Content-Length: ' + html.length,
            '',
            html
        ].join('\n'));
    });
}).listen(port);