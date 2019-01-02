console.log("console.log")
console.log(process.stdin.fd)
console.log(process.stdout.fd)
console.log(process.stderr.fd)
require("fs").write(1, "fs.write(file,str,callback)\n", function (res) {
    console.log(res)
})
process.stdout.write("process.stdout.write")
// process.exit(-1)
