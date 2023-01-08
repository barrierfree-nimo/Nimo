const express = require("express");
const {User} = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const salt = 10;

const user = {
  checkNickname: async function(req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          nickname: req.body.nickname,
        }
      })

      if(user) res.status(201).json({message: "Already exist nickname"});
      else res.status(200).json({message: "Possible Nickname"})
    } catch (error) {
      console.log(error);
    }
  },
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
          res.status(500).json({message: "Already exist nickname"});
        } else {
          bcrypt.genSalt(10, function (err, salt) {
            if (err) return;
            bcrypt.hash(password, salt, function (err, hash) {
              if (err) return;
              User.create({
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
      const {nickname, password} = req.body;
      if (!nickname || !password) {
        return res.status(500).json({message: "Omit some params"});
      } else {
        const user = await User.findOne({
          where: {
            nickname: nickname,
          }
        });

        if (!user) {
          res.status(500).json({message: "Retry (not exist or typeerror)"});
        } else {
          const valid = user.validPassword(req.body.password.toString());
          if (!valid) {
            res.status(401).json({msg: "invalid pw"})
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
            res.status(200).json({
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
  setInfo: async function (req, res, next) {
    try {
      const user = await User.findOne({where: {id: req.user_id}});
      const {birth, gender, job, interest, offspring, bank} = req.body;
      try {
        user.update({
          birth: birth,
          gender: gender,
          job: job,
          interest: interest,
          offspring: offspring,
          bank: bank
        })
      } catch (error) {
        console.log(error)
        res.status(401)
      }
      res.status(200).json("msg: success update userinfo")
    } catch (error) {
      res.status(400)
    }
  }
}

module.exports = user;

