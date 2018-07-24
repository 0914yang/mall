// 引入mongoose模块
var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
    "productId": String,
    "productName": String,
    "salePrice": Number,
    "productImg": String,
})

// 这个Goods模型应该就是对应数据库中的集合名
// 后面的productSchema应该就是集合里面的document
module.exports = mongoose.model('Goods',productSchema); 


// var kittySchema = mongoose.Schema({
//     name: String
// });
// // 通过mongoose.model定义模型
// var Kitten = mongoose.model('Kitten',kittySchema);
// // 通过new关键字实例化Kitten模型，创建silence对象
// var silence = new Kitten({
//     name: 'Silence'
// });
