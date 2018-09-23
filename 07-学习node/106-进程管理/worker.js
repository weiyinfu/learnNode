var beg = new Date().getMilliseconds()
var x = 1
while (new Date().getMilliseconds() - beg < 3000) {
    x *= 3
    x /= 3
}
console.log("worker over")