const {spawn} = require('child_process');
const ls = spawn('java', []);
const iconv = require("iconv-lite")

ls.stdout.on('data', (data) => {
    data = iconv.decode(data, "gbk")
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    data = iconv.decode(data, "gbk")
    console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});