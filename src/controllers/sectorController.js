const sectorModel = require("../models/sector");

const createSector = async (req,res) => {
    const { name, parent_id } = req.body;
    const newSector = new sectorModel({
        name: name,
        parent_id: parent_id
    });

    try {
        await newSector.save();
        res.status(201).json(newSector);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"})
    }
}

const getSectors = async (req,res) => {
    try {
        const sectors = await sectorModel.find();
        res.status(200).json(sectors);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"})
    }
}


module.exports = { createSector, getSectors }