const express = require("express");
const { User, UserInfo } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const salt = 10;

const user = {
  createNewUser: async function (req, res, next) {
    try {
      const { userId, nickname, password } = req.body;
      if (!userId || !nickname || !password) {
        return res.status(500).json({ message: "Omit some params" });
      } else {
        const user = await User.findOne({
          where: {
            userId: userId,
          },
        });
        if (user) {
          return res.status(400).json({ message: "Already exist userId" });
        } else {
          bcrypt.genSalt(10, function (err, salt) {
            if (err) return;
            bcrypt.hash(password, salt, function (err, hash) {
              if (err) return;
              User.create({
                userId: userId,
                nickname: nickname,
                password: hash,
              }).then(function (newUser) {
                res.status(200).json({ id: newUser.id });
              });
            });
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  createToken: async function (req, res) {
    try {
      const { userId, password } = req.body;
      if (!userId || !password) {
        return res.status(500).json({ message: "Omit some params" });
      } else {
        const user = await User.findOne({
          where: {
            userId: userId,
          },
        });

        if (!user) {
          return res.status(500).json({ message: "Retry (not exist userId" });
        } else {
          const valid = user.validPassword(req.body.password.toString());
          if (!valid) {
            return res.status(401).json({ msg: "invalid pw" });
          } else {
            const accessToken = jwt.sign(
              {
                user_id: user.id,
              },
              process.env.JWT_SECRET
              // {
              //   expiresIn: '1d'
              // }
            );
            const refreshToken = jwt.sign(
              {},
              process.env.JWT_SECRET
              // {
              //   expiresIn: '14d'
              // }
            );

            user.update({
              refresh_token: refreshToken,
            });

            const token = {
              accessToken: accessToken,
              refreshToken: refreshToken,
            };
            return res.status(200).json({
              message: "Login Success!",
              token: token,
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  checkNickname: async function (req, res, next) {
    try {
      var nickname = req.params.nickname;
      try {
        const user = await User.findOne({ where: { nickname: nickname } });
      } catch (error) {
        return res.status(402).json(error);
      }
      if (!user.length == 0) {
        console.log(user);
        return res.status(409).json({ msg: "nickname exist" });
      }
      return res.status(200).json({ msg: "nickname not exist" });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  setInfo: async function (req, res, next) {
    try {
      const user = await User.findOne({ where: { id: req.user_id } });
      user.update({ custom: null });

      return res.status(204).json();
    } catch (error) {
      return res.status(400);
    }
  },
};

module.exports = user;
