const mongoose = require('mongoose');

const sceneSchema = new mongoose.Schema({
    name:{
        type:String,
        default:"Tên màn chơi"
    },
    stars: {
        type: Number,
        default:0
    },
    unlocked: {
        type: Boolean,
        required: false
    },
    score: {
        type: Number,
        default:0
    },
    positionX: {type: String,default:""},
    positionY: {type: String,default:""},
    positionZ: {type: String,default:""}
}, { timestamps: true });

const Scene = mongoose.model("Scene", sceneSchema);
module.exports = { Scene };