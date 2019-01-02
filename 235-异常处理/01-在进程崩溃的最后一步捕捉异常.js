process.on("uncaughtException", function (err) {
    console.log("I caught it! ")
    console.log(err)
    console.log(err.stack)
})

y = 3 / 0//这一步并不会抛出异常
console.log(y)
console.log(z)

console.log("will you continue")//抛出异常之后，这句话就不会继续打印了