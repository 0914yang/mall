var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

// 链接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/mall');


// 监听数据库
mongoose.connection.on('connected', () => {
    console.log('mongodb connected success')
});

mongoose.connection.on('error', () => {
    console.log('mongodb connected fail.')
});
 
mongoose.connection.on('disconnected', () => {
    console.log('mongodb connected disconnected.')
});

router.get('/', (req, res, next) => {
    Goods.find({}, (err, doc) => {
        if (err) {
            res.json({
                status: '1',
                msg: err.message
            });
        } else {
            res.json({
                status: '0',
                msg: '',
                result: {
                    count: doc.length,
                    list: doc
                }
            });
        }
    })
});

module.exports = router;