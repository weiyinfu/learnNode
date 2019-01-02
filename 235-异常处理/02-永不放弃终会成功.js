function haha() {
    if (haha.x == undefined) {
        haha.x = 5
    }
    if (haha.x > 0) {
        haha.x--
        throw  new Error("lack still " + haha.x + " times to win")
    }
}

for (var i = 0; i < 7; i++) {
    try {
        haha()
        console.log("finnaly you win")
        break
    } catch (e) {
        console.log(e)
    }

}
