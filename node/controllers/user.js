const express = require("express");
const router = express.Router();
const {User} = require("../models");

const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');
const {refreshToken} = require("../api/middlewares/auth");

const user = {
  createNewUser: async function (req, res, next) {
    try {
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
          const accessToken = jwt.sign(
            {
              user_id: user.id,
            },
            process.env.JWT_SECRET,{
              expiresIn: '1d'
            }
          );
          const refreshToken = jwt.sign({},
            process.env.JWT_SECRET,{
              expiresIn: '14d'
            });

          user.update({
              refresh_token: refreshToken
            })

          const token = {
            accessToken: accessToken,
            refreshToken: refreshToken
          }
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

