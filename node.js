const express = require('express');
//引入中间件，解决history模式
//监听的端口
const app = express();
console.log(88)
//设置静态文件路径
app.use(express.static('dist'));
//监听端口
app.listen(3000);