// require('../connect');
// var User = require('../models/user');
// var express = require('express');
// var router = express.Router();

// var user = new User({
//     username: 'Ewall',
//     password: '123456'
// });

// router.get('/user', function (req, res, next) {
//     user.save((err, doc) => {
//         if (err) {
//             console.log(`写入失败${err}`)
//         } else {
//             console.log(`写入成功${doc}`)
//         }
//     })
// });

// module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
