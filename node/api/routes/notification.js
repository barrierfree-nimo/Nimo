const express = require('express')
const router = express.Router()
const notificationController = require('../../controllers/notification')
const auth = require('../middlewares/auth').checkTokens

router.post("/send", auth, notificationController.sendNotification);
router.get("/get", auth, notificationController.getToken);
router.post("/save", auth, notificationController.saveToken);
router.get("/remove", auth, notificationController.removeToken);

module.exports = router;