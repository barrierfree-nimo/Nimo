const express = require("express");
const {User, UserInfo} = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const salt = 10;

const user = {
  checkNickname: async function (req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          nickname: req.body.nickname,
        }
      })

      if (user) res.status(201).json({message: "Already exist nickname"});
      else res.status(200).json({message: "Possible Nickname"})
    } catch (error) {
      console.log(error);
    }
  },
  createNewUser: async function (req, res, next) {
    try {
      const {userId, nickname, password} = req.body;

      if (!userId || !nickname || !password) {
        return res.status(500).json({message: "Omit some params"});
      } else {
        const user = await User.findOne({
          where: {
            userId: req.body.userId,
          },
        });
        if (user) {
          return res.status(400).json({message: "Already exist userId"});
        } else {
          bcrypt.genSalt(10, function (err, salt) {
            if (err) return;
            bcrypt.hash(password, salt, function (err, hash) {
              if (err) return;
              User.create({
                userId: userId,
                nickname: nickname,
                password: hash,
              }).then(res.status(200).json({message: "Join Success!"}));
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
      const {userId, nickname, password} = req.body;
      if (!userId || !password) {
        return res.status(500).json({message: "Omit some params"});
      } else {
        const user = await User.findOne({
          where: {
            userId: userId
          }
        });

        if (!user) {
          return res.status(500).json({message: "Retry (not exist userId"});
        } else {
          const valid = user.validPassword(req.body.password.toString())
          if (!valid) {
            return res.status(401).json({msg: "invalid pw"})
          }
          else {
            const accessToken = jwt.sign(
              {
                user_id: user.id,
              },
              process.env.JWT_SECRET,
              // {
              //   expiresIn: '1d'
              // }
            );
            const refreshToken = jwt.sign({},
              process.env.JWT_SECRET,
              // {
              //   expiresIn: '14d'
              // }
            );

            user.update({
              refresh_token: refreshToken
            })

            const token = {
              accessToken: accessToken,
              refreshToken: refreshToken
            }
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
      var nickname = req.params.nickname
      try {const user = await User.findOne({where: {nickname: nickname}})}
      catch (error) {
        return res.status(402).json(error)
      }
      if (!user.length == 0) {
        return res.status(409).json({msg: "nickname exist"})
      } else if (is_user === 0) {
        return res.status(200).json({msg: "nickname not exist"})
      } else {
        return res.status(405).json({msg: "multiple value exist"})
      }
    } catch (error) {
      return res.status(400).json(error)
    }
  },
  changePassword: async function (req, res, next) {

    const user = await User.findOne({where: {id: req.user_id}});
    const password = req.body.password;
    const newPassword1 = req.body.newPassword1;
    const newPassword2 = req.body.newPassword2;

    if (!user) {
      return res.status(404).json({message: "Retry (not exist or typeerror)"});
    } else {
      const valid = user.validPassword(password.toString())
      if (!valid) {
        return res.status(401).json({msg: "invalid pw"})
      }
      else {
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
      }
    }

  },
  setInfo: async function (req, res, next) {
    try {
      const {birth, gender, job, interest, offspring, bank} = req.body;

      const [userInfo, check] = await UserInfo.upsert({
        userId: req.user_id,
        birth: birth,
        gender: gender,
        job: job,
        interest: interest,
        offspring: offspring,
        bank: bank
      }, {
        userId: req.user_id
      })

      if(check) {
        return res.status(200).json({msg: "Create userInfo"})
      } else {
        return res.status(201).json({msg: "Update userInfo"})
      }
    } catch (error) {
      return res.status(400)
    }
  },
  getInfo: async function (req, res, next) {

    const userInfo = await UserInfo.findOne({where: {userId: req.user_id}});

    if (!userInfo) {
      return res.status(404).json({msg: "not exist"});
    }

    const {birth, gender, job, interest, offspring, bank} = userInfo;
    const json = {birth, gender, job, interest, offspring, bank}
    return res.status(200).json(json)
  },
  deleteInfo: async function (req, res, next) {
    try {
      const userInfo = await UserInfo.findOne({where: {userId: req.user_id}});
      
      if(userInfo) {
        await UserInfo.destroy({where: {userId: req.user_id}});

        return res.status(204).json();
      } else {
        return res.status(404).json({msg: "Not exist"});
      }
    } catch (error) {
      return res.status(400)
    }
  },
}

module.exports = user;

