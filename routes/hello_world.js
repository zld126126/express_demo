var express = require('express');
var router = express.Router();

/* HelloWorld! */
router.get('/', function (req, res) {
  console.log('Hello World!我是东宝')
  res.send('Hello World!我是东宝')
})

module.exports = router;