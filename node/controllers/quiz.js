const express = require("express")
const router = express.Router()
const { User, Quiz } = require("../models")

const Sequelize = require("sequelize")

const quiz = {
  getQuiz: async function(req, res, next) {
    const quizNum = await User.findOne({
      attributes:['quizNum'],
      where: {
        user_nickname: "mindong1",
        //user_nickname: req.nickname,
      },
      raw: true
    })
    const currentNum = quizNum.quizNum

    // 이번에 풀 퀴즈 객체 1개
    const nextQuiz = await Quiz.findAll({
      attributes: ['id', 'qText', 'aText', 'answer', 'commentary'],
      limit: 1,
      where: {
        id: { [Sequelize.Op.gt]: currentNum },
      },
      raw: true
    })

    if(nextQuiz != null) {
      res.status(200).json(nextQuiz);
    } else {
      // 더이상 풀 수 있는 퀴즈 없는 경우
      res.status(400)
    }
    
  },

  // 퀴즈 1개 참여 완료
  finQuiz: async function(req, res, next) {
    try {
      User.update(
        { quizNum: req.params.id },
        { where: { user_nickname: "mindong1" } }
      ).then(() => { res.status(200).redirect('/quiz/')})
    } catch (error) {
      res.status(400);
    }
  }
}

module.exports = quiz;