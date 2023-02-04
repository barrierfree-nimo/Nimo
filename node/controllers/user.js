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
  checkId: async function (req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          user_id: req.params.userid,
        }
      })
      if (user) res.status(201).json({message: "Already exist id"});
      else res.status(200).json({message: "Possible id"})
    } catch (error) {
      console.log(error);
    }
  },
  checkNickname: async function (req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          nickname: req.params.nickname,
        }
      })
      if (user) res.status(201).json({message: "Already exist nickname"});
      else res.status(200).json({message: "Possible Nickname"})
    } catch (error) {
      console.log(error);
    }
  },
  checkAdmin: async function(req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          id: req.user_id,
          user_id: "admin"
        }
      })

      console.log(user)

      if(!user) res.status(403).json({message: "Invalid Admin"})
      else res.status(200).json({message: "Admin Ok"})
    } catch(err) {
      console.log(err)
    }
  },
  validatePassword: async function (req, res, next) {
    const user = await User.findOne({where: {id: req.user_id}});
    const password = req.body.password;

    const valid = user.validPassword(password.toString())
    if (!valid) {
      return res.status(401).json({msg: "invalid pw"})
    }
    else {
      return res.status(200).json({msg: "valid pw"})
    }
  },
  changeNickname: async function (req, res, next) {
    const user = await User.findOne({where: {id: req.user_id}});
    const nickname = req.body.nickname;

    if (!user) {
      return res.status(404).json({message: "Retry (not exist or typeerror)"});
    } else {
      user.update({nickname: nickname})
      return res.status(200).json({message: "Success!"});
    }
  },
  changePassword: async function (req, res, next) {
    const user = await User.findOne({where: {id: req.user_id}});
    const newPassword1 = req.body.newPassword1;
    const newPassword2 = req.body.newPassword2;

    if (!user) {
      return res.status(404).json({message: "Retry (not exist or typeerror)"});
    } else {
      if (!newPassword1 == newPassword2) {
        return res.status(401).json({msg: "not equal"})
      } else {
        bcrypt.genSalt(10, function (err, salt) {
          if (err) return;
          bcrypt.hash(newPassword1, salt, function (err, hash) {
            if (err) return;
            user.update({
              password: hash,
            }).then(res.status(200).json({message: "Success!"}));
          });
        });
      }
      if (!user.length == 0) {
        console.log(user);
        return res.status(409).json({ msg: "nickname exist" });
      }
      return res.status(200).json({ msg: "nickname not exist" });
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
  updatePushOk: async function (req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          id: req.user_id
        }
      });

      user.update({push_ok: req.body.pushOk});
      return res.status(200).json({msg: "PushOk Updated"})

    } catch (error) {
      return res.status(400).json(error)
    }
  },
}

module.exports = user;
