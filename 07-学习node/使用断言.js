var assert = require("assert")
//node全局变量
console.log(__filename)
console.log(__dirname)


console.log(assert)
var x = 3
assert(x == 3, "x一定等于3")//断言
// assert.equal(x, 3, "x一定等于3")
// assert.equal([1, 2, 3], [1, 2, 3], "两个数组相等")//false
assert.deepEqual([1, 2, 3], [1, 2, 3], "两个数组相等")
// assert.fail()//必然失败的断言
