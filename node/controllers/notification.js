const express = require("express")
const Sequelize = require("sequelize");
const { Expo } = require('expo-server-sdk');
const axios = require('axios');
const { User } = require("../models");


const notification = {
  sendNotification: async function(req, res, next) {
    try {
      const user = await User.findOne({
        where: {id: req.user_id, nickname: "관리자"}
      })

      if(user) {
        const { title, content } = req.body;

          const pushUserList = await User.findAll({
            attributes: ['push_token'],
            where: {
              push_token: {[ Sequelize.Op.ne ]: null || ''},
              push_ok: 1, 
            },
            raw: true,
          })

          let pushTokenList = []
          for(const t of pushUserList) {
            pushTokenList.push(t['push_token']);
          }

          console.log(pushTokenList)

          let pushList = [];
          const totalLength = pushTokenList.length;
          const tokenListLengthForPush100Limit = parseInt(totalLength / 100);
          const expectedOutput = totalLength % 100; 


          for (let i = 0; i < tokenListLengthForPush100Limit; i++) {
            let limit = 100 * i;
            for (let j = 0 + limit; j < 100 + limit; j++) {
              pushList.push(pushTokenList[j]);
            }

            const message = {
              to: pushList,
              sound: 'default',
              title: title,
              body: content,
              data: { someData: 'goes here' },
            };
      
            await axios('https://exp.host/--/api/v2/push/send', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
              },
              data: JSON.stringify(message),
            });
      
            pushList = [];
          }

          // 100 나누기 나머지 보내기
          for (let i = tokenListLengthForPush100Limit * 100; i < tokenListLengthForPush100Limit * 100 + expectedOutput; i++) {
            pushList.push(pushTokenList[i]);
          }
      
          const message = {
            to: pushList,
            sound: 'default',
            title: title,
            body: content,
            data: { someData: 'goes here' },
          };
      
          await axios('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Accept-encoding': 'gzip, deflate',
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(message),
          });
      
          return res.status(200).json({ msg: 'Notification Success' });
      }

      return res.status(400).json({ msg: 'Not Admin' });

    } catch (err) {
      //console.log(err);
      return res.status(400).json({ msg: 'Notification Failed' });
    }
  },

  getToken: async function(req, res, next) {
    const user = await User.findOne({
      where: {id: req.user_id}
    })

    if(user) {
      const pushToken = user.push_token
      console.log(pushToken)
      return res.status(200).json({pushToken: pushToken})
    } else {
      return res.status(201).json({message: "Faild to get Push Token"})
    }
  },

  saveToken: async function(req, res, next) {
    const user = await User.findOne({
      where: {id: req.user_id}
    })
    const pushToken = req.body.pushToken;

    if(user) {
      user.update({push_token: pushToken});
      return res.status(200).json({message: "Push Token Saved"})
    } else {
      return res.status(201).json({message: "Faild to save Push Token"})
    }
  },

  removeToken: async function(req, res, next) {
    const user = await User.findOne({
      where: {id: req.user_id}
    })

    if(user) {
      user.update({push_token: ''});
      user.update({push_ok: 0});
      return res.status(200).json({message: "Push Token Removed"})
    } else {
      return res.status(201).json({message: "Faild to remove Push Token"})
    }
  },
  
}

module.exports = notification;