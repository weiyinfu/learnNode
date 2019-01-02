const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);// 获取此行数据
    var nLine = parseInt(inputArr[0]);// 获取行数
    if (inputArr.length == (nLine + 1)) { // 获取了此轮所有数据，此时获取元素 nLine+1 个，第一个元素为行数nLine.
        var arr = inputArr.slice(1);// 除去行数的具体数据
        // 下面就可以对数据进行处理......
        console.log(arr);
        inputArr = [];// 清空数组
    }
});