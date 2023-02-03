const express = require("express")
const Sequelize = require("sequelize");
const {User} = require("../models")

const notification = {
  sendNotification: async function(req, res, next) {
    try {
      const { title, content } = req.body;
      const tokenList = await User.findAll({
        attributes: ['push_token'],
        where: {push_token: {[ Sequelize.Op.ne ]: null}},
      })

      if(tokenList) console.log("ok")

      console.log(tokenList)

      //console.log(tokenList)
      // let pushList = [];
      // const totalLength = tokenList.length;
      // const tokenListLengthForPush100Limit = parseInt(totalLength / 100);
      // const expectedOutput = totalLength % 100;

      // for (let i = 0; i < tokenListLengthForPush100Limit; i++) {
      //   let limit = 100 * i;
      //   for (let j = 0 + limit; j < 100 + limit; j++) {
      //     pushList.push(tokenList[j].push_token);
      //   }

      //   console.log(pushList)

      //   const message = {
      //     to: pushList,
      //     sound: 'default',
      //     title: title,
      //     body: content,
      //     data: { someData: 'goes here' },
      //   };
  
      //   await axios('https://exp.host/--/api/v2/push/send', {
      //     method: 'POST',
      //     headers: {
      //       Accept: 'application/json',
      //       'Accept-encoding': 'gzip, deflate',
      //       'Content-Type': 'application/json',
      //     },
      //     data: JSON.stringify(message),
      //   });
  
      //   pushList = [];
      // }

      // // 100 나누기 나머지 보내기
      // for (let i = tokenListLengthForPush100Limit * 100; i < tokenListLengthForPush100Limit * 100 + expectedOutput; i++) {
      //   pushList.push(tokenList[i].push_token);
      // }
  
      // const message = {
      //   to: pushList,
      //   sound: 'default',
      //   title: title,
      //   body: content,
      //   data: { someData: 'goes here' },
      // };
  
      // await axios('https://exp.host/--/api/v2/push/send', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Accept-encoding': 'gzip, deflate',
      //     'Content-Type': 'application/json',
      //   },
      //   data: JSON.stringify(message),
      // });
  
      return res.status(200).json({ msg: 'Notification Success' });
    
    } catch (err) {
      console.log(err);
      return res.status(400).json({ msg: 'Notification Failed' });
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
      return res.status(200).json({message: "Push Token Removed"})
    } else {
      return res.status(201).json({message: "Faild to remove Push Token"})
    }
  },
  
}

module.exports = notification;