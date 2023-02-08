const mongoose = require("mongoose");

const SectorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    parent_id: {
        type: Number,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model("Sector", SectorSchema);