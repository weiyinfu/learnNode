/**
 * 本实例从博客园爬取文章
 * */
var axios = require("axios")
var cheerio = require("cheerio")
axios.get("http://www.cnblogs.com/weiyinfu").then(function (resp) {
    $ = cheerio.load(resp.data)
    var titles = $(".postTitle a")
    for (var i = 0; i < titles.length; i++) {
        console.log($(titles[i]).text())
    }
}).catch(function (e) {
    console.log("出错了")
    console.log(e)
})