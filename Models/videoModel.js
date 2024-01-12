const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    videoUrl: String,
    subtitle : Array
}, 
{
    timestamps:true
});

const videoModel = mongoose.model('videos',videoSchema);
module.exports = videoModel;