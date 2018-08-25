require('../connect');
var Home = require('../models/home');
var express = require('express');
var router = express.Router();

// 定义'user'实体
var homeData = new Home();

// 二级路由
router.get('/', function (req, res, next) {
  //res.send('hello world');
  Home.find({}, function (err, doc) {
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
          data: doc
        }
      })
    }
  })
});

module.exports = router;