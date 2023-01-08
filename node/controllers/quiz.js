const express = require("express")
const {User, Quiz} = require("../models")
const Sequelize = require("sequelize")

const quiz = {
  fetchQuiz: async function (req, res, next) {
    try {
      // user가 가장 최근에 풀이한 quizNum
      const quizNum = await User.findOne({
        attributes: [ 'quizNum' ],
        where: {
          id: req.user_id,
        },
        raw: true
      })
      const currentNum = quizNum.quizNum

      // 이번에 풀 퀴즈 객체 1개
      const nextQuiz = await Quiz.findAll({
        attributes: [ 'id', 'qText', 'aText', 'answer', 'commentary' ],
        limit: 1,
        where: {
          id: {[ Sequelize.Op.gt ]: currentNum},
        },
        raw: true
      })

      if (nextQuiz != null) {
        return res.status(200).json(nextQuiz);
      }
      else {
        return res.status(401);
      }

    } catch (err) {
      return res.status(400);
    }
  },


  finQuiz: async function (req, res, next) {
    try {
      User.update(
        {quizNum: req.params.id},
        {where: {id: req.user_id}}
      ).then(() => {return res.status(200).redirect('/quiz/')})
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = quiz;