const express = require("express");
const router = express.Router();
const mainController = require('../../controllers/main');
const auth = require('../middlewares/auth').checkTokens


router.get("/", auth, mainController.userInfo);

module.exports = router;