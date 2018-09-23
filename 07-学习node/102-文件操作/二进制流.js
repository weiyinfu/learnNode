fs=require('fs')
var rs = fs.createReadStream('input.txt');

rs.on('data', function (chunk) {
    console.log(chunk.toString('utf8'))
});

rs.on('end', function () {
    console.log('this is the end')
});