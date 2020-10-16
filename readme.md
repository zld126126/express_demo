# 安装
```
$ mkdir myapp
$ cd myapp

$ npm init

npm install express --save
```

# HelloWorld 创建一个app.js
```
内容如下:
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

# 初始化
```
npx express-generator
y
安装依赖:
npm install
运行程序:
SET DEBUG=express-demo:* "&" npm start
或者直接:
npm start
```

# 参考文档
```
https://www.expressjs.com.cn/
```