var http = require('http');
var url = require('url');
var util = require('util');

var options = {
    host: "www.baidu.com",
    port: "80",
    path: null,
    method: 'GET'
};
var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + util.inspect(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
    res.on('error', function (err) {
        console.log('RESPONSE ERROR: ' + err);
    });
});

req.on('error', function (err) {
    console.log('REQUEST ERROR: ' + err);
});
req.end();