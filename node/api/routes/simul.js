const express = require("express");
const router = express.Router();
const { User, Msg, SimulData, History } = require("../../models");
var Sequelize = require("sequelize");

module.exports = (app) => {
  app.use("/simul", router);

  router.get("/", async function (req, res, next) {
    arr = ["voice", "sns", "msg"];
    //type = arr[Math.floor(Math.random() * 2)];
    type = arr[2];
    const doneNum = await History.findAll({
      where: {
        userId: req.query.userId,
        type: arr[2],
      },
      attributes: ["simulNum"],
      raw: true,
    });
    const done = doneNum.map((x) => Number(x.simulNum));

    if (type == "voice") {
      //
    } else if (type == "msg") {
      console.log(done);
      //const Op = Sequelize.Op

      var notDone = await Msg.findAll({
        limit: 1,
        where: {
          num: { [Sequelize.Op.notIn]: done },
        },
        attributes: ["num"],
        raw: true,
      });
      var num = notDone[0].num;
      console.log(num);
    } else if (type == "sns") {
      //
    }

    res.status(200).json({ type, num });
  });

  router.get("/msg/:num", async function (req, res, next) {
    try {
      const scripts = await Msg.findeOne({
        //
      });
    } catch (error) {
      //
    }
  });
};
