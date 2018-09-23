console.log(process)//一个巨无霸的全局对象
//打印命令行参数
for (var i in process.argv) {
    console.log(i + " = " + process.argv[i])
}
/*
C:\Users\weidiao\Desktop\学前端\学习node>node args.js hello wyf
0 = C:\Program Files\nodejs\node.exe
1 = C:\Users\weidiao\Desktop\学前端\学习node\args.js
2 = hello
3 = wyf
* */