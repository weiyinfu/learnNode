var usedTimes = 0

//直接使用exports变量就可以，但是exports=xxxx是却是不可以的，必须使用module.exports=xxx
exports.add = function (x, y) {
    usedTimes++
    return x + y + " 这是第" + usedTimes + "次调用"
}
exports.sub = function (x, y) {
    usedTimes++
    return x - y + " 这是第" + usedTimes + "次调用"
}