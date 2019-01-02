/**
 * js是单线程的，一个长时间的CPU运算可能会阻塞后面的全部请求
 * */
var http = require("http");
/**
 * http模块既可以发起http请求，也能够创建http服务
 * */
counter = 0
http.createServer(function (req, res) {
    console.log(counter)
    counter++
    if (counter == 3) {//一个子循环会导致整个web服务器崩掉
        while (1) ;
    }
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Node.js</h1>");
    res.write("<p>Hello World</p>");
    res.end("<p>beyondweb.cn</p>");
}).listen(80);
console.log("http://localhost")
