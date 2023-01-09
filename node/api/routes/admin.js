const express = require("express");
const router = express.Router();
const adminController = require('../../controllers/admin');
const auth = require('../middlewares/auth').checkTokens

router.get("/:type/:value", auth, adminController.blockContents);

module.exports = router;