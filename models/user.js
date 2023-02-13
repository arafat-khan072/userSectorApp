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
        value: { type: mongoose.Schema.ObjectId },
        label: { type: String },
        child: [
            {
                value: { type: mongoose.Schema.ObjectId },
                label: { type: String },
            }
        ]
    }],
    isAgreed: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

module.exports = mongoose.model("User", UserSchema);