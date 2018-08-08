var mongoose = require('mongoose');

// 定义Model
UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// 定义model
var UserModel = mongoose.model('User',UserSchema);

// 暴露接口
module.exports = UserModel;