const express = require("express");
const router = express.Router();
const { User, Msg, Sns, SimulData, History } = require("../../models");
var Sequelize = require("sequelize");
const { json, HasMany } = require("sequelize");

const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");

module.exports = (app) => {
  app.use("/simul", router);

  router.get("/", async function (req, res, next) {
    arr = ["sns", "msg", "voice"];
    //type = arr[Math.floor(Math.random() * 1)];
    type = arr[Math.round(Math.random())] // 0 or 1 (except voice)
    console.log(type)
    const doneNum = await History.findAll({
      where: {
        userId: "test1",
        type: type,
      },
      attributes: ["simulNum"],
      raw: true,
    });
    const done = doneNum.map((x) => Number(x.simulNum));

    if (type == "voice") {
      //
    } else if (type == "msg") {
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
      var notDone = await Sns.findAll({
        limit: 1,
        where: {
          num: { [Sequelize.Op.notIn]: done },
        },
        attributes: ["num"],
        raw: true,
      });
      var num = notDone[0].num;
      console.log(num);
    }

    res.status(200).json({ type, num });
  });

  router.get("/msg", async function (req, res, next) {
    try {
      const simul = await SimulData.findAll({
        where: {
          type: "msg",
        },
        attributes: ["simulNum", "title", "commentary"],
        raw: true,
      });
      const history = await History.findAll({
        where: {
          userId: "test1",
          type: "msg",
        },
        attributes: ["simulNum"],
        raw: true,
      });
      const done = history.map((x) => Number(x.simulNum));

      const data = {
        simul: simul,
        done: done,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(400);
    }
  });

  router.get("/msg/:num", async function (req, res, next) {
    try {
      const scripts = await Msg.findAll({
        where: {
          num: req.params.num,
        },
        attributes: ["contents", "response"],
        raw: true,
      });
      const scrp = [];
      scripts.map((x) => {
        scrp.push([x.contents, parseInt(x.response)]);
      });

      const comm = await SimulData.findOne({
        where: {
          type: "msg",
          simulNum: req.params.num,
        },
        attributes: ["commentary"],
        raw: true,
      });

      const data = {
        scripts: scrp,
        commentary: String(Object.values(comm)),
      };

      res.status(200).json(data);
    } catch (error) {
      res.status(400);
    }
  });

  router.get("/sns", async function (req, res, next) {
    try {
      const simul = await SimulData.findAll({
        where: {
          type: "sns",
        },
        attributes: ["simulNum", "title", "commentary"],
        raw: true,
      });
      const history = await History.findAll({
        where: {
          userId: "test1",
          type: "sns",
        },
        attributes: ["simulNum"],
        raw: true,
      });
      const done = history.map((x) => Number(x.simulNum));

      const data = {
        simul: simul,
        done: done,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(400);
    }
  });

  router.get("/sns/:num", async function (req, res, next) {
    try {
      const scripts = await Msg.findAll({
        where: {
          num: req.params.num,
        },
        attributes: ["contents", "response"],
        raw: true,
      });
      const scrp = [];
      scripts.map((x) => {
        scrp.push([x.contents, parseInt(x.response)]);
      });

      const comm = await SimulData.findOne({
        where: {
          type: "sns",
          simulNum: req.params.num,
        },
        attributes: ["commentary"],
        raw: true,
      });

      const data = {
        scripts: scrp,
        commentary: String(Object.values(comm)),
      };

      res.status(200).json(data);
    } catch (error) {
      res.status(400);
    }
  });
};

