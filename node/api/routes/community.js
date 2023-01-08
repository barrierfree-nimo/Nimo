const express = require("express");
const router = express.Router();
const commController = require('../../controllers/community');
const auth = require('../middlewares/auth').checkTokens

router.get("/", auth, commController.readList);
router.get("/:id", auth, commController.readPost);
router.post("/post", auth, commController.writePost);
router.patch("/post/:id", auth, commController.modifyPost)
router.delete("/post/:id", auth, commController.deletePost);
router.post("/comment", auth, commController.writeComment);
router.patch("/comment/:id", auth, commController.modifyComment);
router.delete("/comment/:id", auth, commController.deleteComment);
router.get("/keyword/:keyword", auth, commController.findKeyword);
router.get("/tag/:tag", auth, commController.findTag);

module.exports = router;