const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlegth: 6,
        maxlegth: 20,
        unique: true
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
    isAdmin: {
        type: Boolean,
        default: false,
    },
    gold: {
        type: Number,
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);