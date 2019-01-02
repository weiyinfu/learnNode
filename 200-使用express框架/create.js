axios = require("axios")
axios.post("http://localhost/users", data = {
    "name": "weidiao"
}).then(function (resp) {
    console.log(resp.data)
}).catch(function (err) {
    console.log(err)
})