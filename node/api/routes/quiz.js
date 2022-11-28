const express = require('express')
const router = express.Router()
const quizController = require('../../controllers/quiz')
const auth = require('../middlewares/auth').checkToken

router.get("/", auth, quizController.getQuiz)
router.get("/:id", auth, quizController.finQuiz)

module.exports = router