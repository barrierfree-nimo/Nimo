const express = require("express")
const router = express.Router()
const { User, Quiz } = require("../../models")

const Sequelize = require("sequelize")

module.exports = (app) => {
  app.use("/quiz", router);

  // 퀴즈 1개 불러오기
  router.get("/", async function(req, res, next) {
    
    const quizNum = await User.findOne({
      attributes:['quizNum'],
      where: {
        nickname: "tester",
      }
    })
    const currentNum = quizNum.quizNum


    // 이번에 풀 퀴즈 객체 1개
    const nextQuiz = await Quiz.findAll({
      attributes: ['id', 'qText', 'aText', 'answer', 'commentary'],
      limit: 1,
      where: {
        id: { [Sequelize.Op.gt]: currentNum },
      },
    })
    res.status(200).json(nextQuiz);
    // res.send(nextQuiz);
    
  })


  // 퀴즈 1개 참여 완료
  router.get("/:id", async function(req, res, next) {
    try {
      User.update(
        { quizNum: req.params.id },
        { where: { nickname: "tester" } }
      ).then(() => { res.redirect('/quiz/')})
    } catch (error) {

    }
  })
}