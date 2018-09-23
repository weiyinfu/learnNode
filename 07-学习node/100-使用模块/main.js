alg = require('./alg')
// alg = require('./alg.js')
// .js扩展名可以省略，默认导入的是js，也可以导入json
input = require('./input.json')
for (var i = 0; i < input.length; i++) {
    var x = input[i][0], y = input[i][1]
    console.log(alg.add(x, y))
    console.log(alg.sub(x, y))
}
