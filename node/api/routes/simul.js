const {application} = require("express");
const express = require("express");
const router = express.Router();
const simulController = require('../../controllers/simul');
const auth = require('../middlewares/auth').checkToken

const { json, HasMany } = require("sequelize");

router.get("/", auth, simulController.randomApp);
router.get("/msg", auth, simulController.msgDoneList);
router.get("/msg/:num", auth, simulController.msgSimul);
router.get("/sns", auth, simulController.snsDoneList);
router.get("/sns/:num", auth, simulController.snsSimul);
router.get("/history", auth, simulController.showHistory);

module.exports = router;