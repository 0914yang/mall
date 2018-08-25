var mongoose = require('mongoose');

// 定义Model
HomeSchema = new mongoose.Schema({
    "swiper": Array,
    "classifiData": {
        "up": [
            {
                "id": Number,
                "img": String
            }],
        "down": [
            {
                "id": Number,
                "img": String
            }]
    },
    "recommendData": [
        {
            "imgurl": String,
            "title": String,
            "endtime": Number,
        }
    ]
});

// 定义model
var HomeModel = mongoose.model('Home', HomeSchema);

// 暴露接口
module.exports = HomeModel;