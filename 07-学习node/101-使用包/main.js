/**
 * 在编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用。
 * */
console.log(module)
console.log(typeof module)
util = require('./util')//相当于默认加载./util/index.js
console.log(util)
console.log(util.add(3, 4))
console.log(util.sub(3, 4))