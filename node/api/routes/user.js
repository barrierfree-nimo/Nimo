const express = require("express");
const router = express.Router();
const userController = require('../../controllers/user');

router.post("/join", userController.createNewUser);
router.post("/login", userController.createToken);

module.exports = router;