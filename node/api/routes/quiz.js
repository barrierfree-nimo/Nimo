const express = require('express')
const router = express.Router()
const quizController = require('../../controllers/quiz')
const auth = require('../middlewares/auth').checkTokens

router.get("/", auth, quizController.fetchQuiz);
router.get("/:id", auth, quizController.finQuiz);

module.exports = router;
