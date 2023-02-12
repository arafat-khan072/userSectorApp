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
    sectors: [{
        id: { type: mongoose.Schema.ObjectId },
        name: { type: String },
        child: [
            {
                id: { type: mongoose.Schema.ObjectId },
                name: { type: String },
            }
        ]
    }],
    isAgreed: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

module.exports = mongoose.model("User", UserSchema);