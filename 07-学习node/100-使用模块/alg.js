var usedTimes = 0
exports.add = function (x, y) {
    usedTimes++
    return x + y + " 这是第" + usedTimes + "次调用"
}
exports.sub = function (x, y) {
    usedTimes++
    return x - y + " 这是第" + usedTimes + "次调用"
}