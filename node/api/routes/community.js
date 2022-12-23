const {application} = require("express");
const express = require("express");
const router = express.Router();
const commController = require('../../controllers/community');
const auth = require('../middlewares/auth').checkTokens

router.get("/", auth, commController.readList);
router.get("/:id", auth, commController.readPost);
router.post("/write", auth, commController.writePost);
router.post("/comment", auth, commController.writeComment);
router.get("/keyword/:keyword", auth, commController.findKeyword);

module.exports = router;