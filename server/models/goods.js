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
