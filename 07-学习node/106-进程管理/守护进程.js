child_process=require("child_process")
/* daemon.js */
function spawn(mainModule) {
    var worker = child_process.spawn('node', [ mainModule ]);

    worker.on('exit', function (code) {
        console.log(code)
        if (code !== 0) {
            spawn(mainModule);
        }
    });
}

spawn('./worker.js');