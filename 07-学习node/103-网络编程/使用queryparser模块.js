qs = require("querystring")
console.log(qs.parse("one=1&two=2"))
console.log(qs.stringify({
    one: 1,
    two: 2
}))