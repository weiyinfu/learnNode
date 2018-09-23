net = require("net")
var options = {
    port: 80,
    host: 'localhost'
};

var client = net.connect(options, function () {
    client.write("我是客户端");
});

client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});