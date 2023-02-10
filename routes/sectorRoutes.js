const express = require("express");
const { getSectors, createSector } = require("../controllers/sectorController");
const auth = require("../middlewares/auth");
const sectorRouter = express.Router();

sectorRouter.get("/",  getSectors);
sectorRouter.post("/", createSector);

module.exports = sectorRouter;