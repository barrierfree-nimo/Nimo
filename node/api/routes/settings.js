const {application} = require("express");
const express = require("express");
const router = express.Router();
const settingController = require('../../controllers/settings');
const auth = require('../middlewares/auth').checkTokens

const { json, HasMany } = require("sequelize");

router.get("/", auth, settingController.userInfo);
router.post("/password", auth, settingController.resetPassword);
router.post("/info", auth, settingController.setInfo);

module.exports = router;