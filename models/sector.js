const mongoose = require("mongoose");

const SectorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    child: [{
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        name: { type: String }
    }]

}, { timestamps: true })

module.exports = mongoose.model("Sector", SectorSchema);