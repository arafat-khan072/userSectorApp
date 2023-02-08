const express = require("express");
const { signup, login } = require("../controllers/userController");
const sectorRouter = express.Router();

sectorRouter.post("/sectors/add", addSector);

module.exports = sectorRouter;