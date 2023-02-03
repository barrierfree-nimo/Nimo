const express = require('express')
const router = express.Router()
const notificationController = require('../../controllers/notification')
const auth = require('../middlewares/auth').checkTokens

router.get("/send", auth, notificationController.sendNotification);
router.get("/save", auth, notificationController.saveToken);
router.get("/remove", auth, notificationController.removeToken);

module.exports = router;