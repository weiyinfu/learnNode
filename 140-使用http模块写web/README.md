index.js：整个程序的入口
server.js：封装http模块
router.js：建立url到handler的映射，router是一个工具函数
requestHandler.js：各种处理器

如果说这四个文件就算一个框架，那么index.js和requestHandler中的内容是用户自己写的

router和server是框架的一部分