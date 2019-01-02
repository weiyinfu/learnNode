path = require("path")
console.log(module.filename)
console.log(path.normalize("."))//求绝对路径，去掉相对路径
console.log(path.join("one", "two"))//拼接路径
console.log(path.resolve("re", "solve"))//解析路径，通过node_module查找包
console.log(path.resolve("/re", "solve"))//解析路径，通过node_module查找包
console.log(path.extname("one/haha.js"))//获取文件扩展名
console.log(path.basename("one/haha.js"))//获取文件名haha.js
console.log(path.dirname("one/haha.js"))//获取文件目录名
console.log(path.relative('.', '/'))//relative(src,dest)
console.log(path.parse("one/haha.js"))//解析为字典，包括root，dir，base，ext，name五个字段
console.log(path)