url = require("url")
console.log(url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash'))
console.log(url.format({
    protocol: "ftp:",
    host: "weiyinfu.cn",
    port: 8080,
    pathname: "2eat1",
    search: "?one=1&two=2"
}))
