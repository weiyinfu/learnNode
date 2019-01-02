# npm install
npm install argv 默认下载最新版
npm install argv@0.0.2 指明版本号
使用-g 参数表示全局安装，安装到%APPDATA%\npm\  目录下。

使用package.json指明依赖，然后执行npm install命令即可，
这样可以批量下载依赖。
{
    "name": "node-echo",
    "main": "./lib/echo.js",
    "dependencies": {
        "argv": "0.0.2"
    }
}
# 使用node_module的正确姿势
* 需要在环境变量中配置NODE_PATH环境变量
* 可以使用软连接把%APP_DATA%/npm/node_modules包链接到当前目录，这样package.json就不会下载那么多的依赖文件了

# 关于版本号
关于版本号的小知识：
语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。
当代码变更时，版本号按以下原则更新。

+ 如果只是修复bug，需要更新Z位。

+ 如果是新增了功能，但是向下兼容，需要更新Y位。

+ 如果有大变动，向下不兼容，需要更新X位。


控制台下，直接输入npm命令可以查看更多操作。