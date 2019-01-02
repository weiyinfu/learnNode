/**
 * 古人云：一图胜千言，一个好的示例也能够胜千言万语
 * */
url = require("url")
var u = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string&one=1#hash')
console.log(u)
console.log(url.format({
    protocol: "ftp:",
    host: "weiyinfu.cn",
    port: 8080,
    pathname: "2eat1",
    search: "?one=1&two=2"
}))
