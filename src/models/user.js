const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sectors: {
        type: [Number], // this goes as array
        required: false
    },
    isAgreed: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

module.exports = mongoose.model("User", UserSchema);