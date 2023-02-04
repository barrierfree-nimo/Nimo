const express = require("express");
const router = express.Router();
const userController = require('../../controllers/user');
const auth = require('../middlewares/auth').checkTokens

router.post("/join", userController.createNewUser);
router.post("/login", userController.createToken);

router.get("/userId/:userId", userController.checkId);
router.get("/nickname/:nickname", userController.checkNickname);

router.get("/checkAdmin", auth, userController.checkAdmin);

router.post("/password/valid", auth, userController.validatePassword);

router.post("/nickname", auth, userController.changeNickname);
router.post("/password", auth, userController.changePassword);

router.post("/info", userController.setInfo);
router.put("/info", auth, userController.updateInfo);
router.get("/info", auth, userController.getInfo);
router.delete("/info", auth, userController.deleteInfo);
router.put("/push", auth, userController.updatePushOk);

module.exports = router;