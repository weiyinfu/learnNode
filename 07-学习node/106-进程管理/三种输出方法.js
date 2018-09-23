console.log("console.log")
require("fs").write(1, "fs.write(file,str,callback)\n", function (res) {
    console.log(res)
})
process.stdout.write("process.stdout.write")
// process.exit(-1)
