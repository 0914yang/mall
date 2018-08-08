var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mall');

mongoose.connection.on('error',(err) => {
    console.log(`数据库连接失败${err}`);
});

mongoose.connection.on('open',() => {
    console.log('数据库连接成功');
}) 