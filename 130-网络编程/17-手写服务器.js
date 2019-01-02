var http = require("http");
/**
 * http模块既可以发起http请求，也能够创建http服务
 * */
http.createServer(function (req, res) {
    console.log(req)
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Node.js</h1>");
    res.write("<p>Hello World</p>");
    res.end("<p>beyondweb.cn</p>");
}).listen(80);
console.log("http://localhost")
