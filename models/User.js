const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlegth: 6,
        maxlegth: 20,
        unique: true
    },
    profilePicture: {
        type: String,
        default:
            "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    },
    email: {
        type: String,
        required: true,
        minlegth: 6,
        maxlegth: 20,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlegth: 6,
        maxlegth: 20,
    },
    score: {
        type: Number,
    },
    positionX: {type: String,default:""},
    positionY: {type: String,default:""},
    positionZ: {type: String,default:""}
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = { User };