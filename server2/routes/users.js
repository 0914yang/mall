require('../connect');
var User = require('../models/user');
var express = require('express');
var router = express.Router();

// 定义'user'实体
var user = new User({
  username: 'Ewall',
  password: '123456'
});

// 操作数据库
user.save(function (err, doc) {
  if (err) {
    console.log('save error:' + err);
  }
  console.log('save sucess \n' + doc);
})

// 二级路由
router.get('/', function (req, res, next) {
  //res.send('hello world');
  User.find({}, function (err, doc) {
    if (err) {
      res.json({
        status: '500',
        msg: err.message
      })
    } else {
      res.json({
        status: '200',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
});

module.exports = router;

