process = require("process")
fs = require("fs")

function readSyn() {
    process.stdin.pause();
    var response = fs.readSync(process.stdin.fd, new Buffer(1000), 0, 1000, 0);
    process.stdin.resume();
    return response
}

while (1) {
    res = readSyn()
    console.log(typeof res)
    console.log(res)
}