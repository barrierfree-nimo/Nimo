const express = require("express");
const router = express.Router();
const {User} = require("../models");

const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');

const user = {
  createNewUser: async function (req, res, next) {
    try {
      console.log("controller!")
      const {nickname, password} = req.body;
  
      if (!nickname || !password) {
        return res.status(500).json({message: "Omit some params"});
      } else {
        const user = await User.findOne({
          where: {
            nickname: req.body.nickname,
          },
        });
  
        if (user) {
          res.status(400).json({message: "Already exist nickname"});
        } else {
          User.create({
            nickname: req.body.nickname,
            password: req.body.password,
          }).then(res.status(200).json({message: "Join Success!"}));
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  createToken: async function (req, res) {
    try {
      const {nickname, password} = req.body;
      if (!nickname || !password) {
        return res.status(500).json({message: "Omit some params"});
      } else {
        const user = await User.findOne({
          where: {
            nickname: req.body.nickname,
            password: req.body.password,
          },
        });
  
        if (!user) {
          res.status(400).json({message: "Retry (not exist or typeerror)"});
        } else {
          const token = jwt.sign(
            {
              nickname: req.body.nickname,
            },
            process.env.JWT_SECRET
          );
          res.status(200).json({
            message: "Login Success!",
            token: token,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = user;

