const express = require("express");
const router = express.Router();
const { User } = require("../../models");

const Sequelize = require("sequelize");

module.exports = (app) => {
  app.use("/user", router);

  router.post("/join", async function (req,res) {
    try {
      const { userId, password, nickname } = req.body;

      if (!userId || !password || !nickname) {
        return res.status(500).json({ message: "Omit some params" });
      } else {
        const user = await User.findOne({
          where: {
            userId: req.body.userId,
          },
        });

        if (user) {
          res.status(400).json({ message: "Already exist userId" });
        } else {
          User.create({
            userId: req.body.userId,
            password: req.body.password,
            nickname: req.body.nickname,
          }).then(res.status(200).json({ message: "Join Success!" }));
        }
      }
    } catch (error) {
      console.log(error);
    }
  });

  router.post("/login", async function (req,res) {
    try {
      const { userId, password } = req.body;
      if (!userId || !password) {
        return res.status(500).json({ message: "Omit some params" });
      } else {
        const user = await User.findOne({
          where: {
            userId: req.body.userId,
            password: req.body.password,
          },
        });

        if (!user) {
          res.status(400).json({ message: "Retry (not exist or typeerror)" });
        } else {
          res.status(200).json({ message: "Login Success!" });
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
};
