var http = require("http");
var port = 80
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Node.js</h1>");
    res.write("<p>Hello World</p>");
    res.end("<p>beyondweb.cn</p>");
}).listen(80);
console.log(`HTTP server is listening at port ${port}.`);
