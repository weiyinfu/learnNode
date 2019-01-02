//request库和jquery语法非常接近，默认为get方法
var request = require('request');
request('http://www.baidu.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // 打印google首页
    } else {
        console.log("error!")
    }
})