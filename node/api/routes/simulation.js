const express = require("express");
const router = express.Router();
const simulController = require('../../controllers/simulation');
const auth = require('../middlewares/auth').checkTokens

router.get("/", auth, simulController.randomApp);
router.get("/msg", auth, simulController.msgDoneList);
router.get("/msg/:num", auth, simulController.msgSimul);
router.get("/sns", auth, simulController.snsDoneList);
router.get("/sns/:num", auth, simulController.snsSimul);
// router.get("/voice", auth, simulController.voiceDoneList);
// router.get("/voice/:num", auth, simulController.voiceSimul);
router.post("/done", auth, simulController.addDoneList);
router.get("/history", auth, simulController.showHistory);

module.exports = router;