const {application} = require("express");
const express = require("express");
const router = express.Router();
const userController = require('../../controllers/user');
const auth = require('../middlewares/auth').checkTokens

router.post("/join", userController.createNewUser);
router.post("/login", userController.createToken);
router.post("/info", auth, userController.setInfo);
module.exports = router;