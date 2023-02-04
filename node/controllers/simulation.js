const {getStorage, ref, getDownloadURL, listAll} = require('firebase/storage')
const express = require("express");
const {User, History, Voice, Msg, Sns, SimulData} = require("../models");
var Sequelize = require("sequelize");
const {json, HasMany} = require("sequelize");
const {async} = require('@firebase/util');

async function isCustom(user, type) {
  try {
    const userCustom = (user.custom).split(',');
    let simulNum = [];
    for (let i = 0; i < userCustom.length; i++) {
      var simul = await SimulData.findAll({
        where: {
          type: type,
          custom: {
            [ Sequelize.Op.like ]: '%' + userCustom[ i ] + '%'
          }
        },
        attributes: [ "simulNum" ],
        raw: true,
      });
      const list = simul.map((x) => Number(x.simulNum));
      simulNum = simulNum.concat(list.filter((x) => simulNum.indexOf(x) < 0))
    };
    simulNum.sort()
    return simulNum;
  } catch (error) {
    console.log(error);
  }
}

const simulation = {
  randomApp: async function (req, res, next) {
    try {
      const user = await User.findOne({where: {id: req.user_id}});
      const arr = [ "sns", "msg", "voice" ];
      let check = [];
      const red = []
      for (t of [ "sns", "msg", "voice" ]) {
        const calc = await SimulData.count({where: {type: t}}) - await History.count({where: {type: t, user_id: user.id}})
        if (calc > 0) {
          red.push(t)
        }
      }

      while (true) {
        var rand = Math.floor(Math.random() * 3)
        var type = arr[ rand ];

        const doneNum = await History.findAll({
          where: {
            user_id: user.id,
            type: type,
          },
          attributes: [ "simulNum" ],
          raw: true,
        });

        const done = doneNum.map((x) => Number(x.simulNum));

        if (type == "voice") {
          var notDone = await Voice.findAll({
            limit: 1,
            where: {
              num: {[ Sequelize.Op.notIn ]: done},
            },
            attributes: [ "num" ],
            raw: true,
          });
        } else if (type == "msg") {
          var notDone = await Msg.findAll({
            limit: 1,
            where: {
              num: {[ Sequelize.Op.notIn ]: done},
            },
            attributes: [ "num" ],
            raw: true,
          });
        } else if (type == "sns") {
          var notDone = await Sns.findAll({
            limit: 1,
            where: {
              num: {[ Sequelize.Op.notIn ]: done},
            },
            attributes: [ "num" ],
            raw: true,
          });
        }

        if (notDone.length !== 0) {
          var num = notDone[ 0 ].num;

          var titleList = await SimulData.findAll({
            limit: 1,
            where: {
              type: type,
              simulNum: num
            },
            attributes: [ "title" ],
            raw: true,
          })
          var title = titleList[ 0 ].title;

          break;
        } else {
          check[ rand ] = true
        }

        if (check[ 0 ] && check[ 1 ] && check[ 2 ]) {
          return res.status(200).json({red})
        }
      }
      return res.status(200).json({type, num, title, red});
    } catch (error) {
      return res.status(400)
    }
  },
  voiceDoneList: async function (req, res, next) {
    try {
      const type = "voice";
      const user = await User.findOne({where: {id: req.user_id}});
      const simulCustom = await isCustom(user, type);
      const simul = await SimulData.findAll({
        where: {
          type: "voice",
        },
        attributes: [ "simulNum", "title", "commentary" ],
        raw: true,
      });

      const history = await History.findAll({
        where: {
          user_id: user.id,
          type: "voice",
        },
        attributes: [ "simulNum" ],
        raw: true,
      });
      const done = history.map((x) => Number(x.simulNum));

      for (const i of simul) {
        if (done.includes(i.simulNum)) {
          i[ 'done' ] = 'true'
        } else {
          i[ 'done' ] = 'false'
        }
        if (simulCustom.includes(i.simulNum)) {
          i[ 'isCustom' ] = 'true'
        } else {
          i[ 'isCustom' ] = 'false'
        }
      }
      return res.status(200).json(simul);

    } catch (error) {
      return res.status(400)
    }
  },
  voiceSimul: async function (req, res, next) {
    try {
      const scripts = await Voice.findAll({
        where: {
          num: req.params.num,
        },
        attributes: [ "contents", "response" ],
        raw: true,
      });

      const simul = await SimulData.findOne({
        where: {
          type: "voice",
          simulNum: req.params.num,
        },
        attributes: [ "commentary", "custom" ],
        raw: true,
      });


      // Firebase Storage
      const storage = getStorage();
      const voiceRef = ref(storage, 'voice/' + String(req.params.num));
      let urlList = [];

      await listAll(voiceRef).then((response) => {
        response.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            urlList.push(String(url))

            if (urlList.length == (response.items).length) {
              urlList.sort()

              const scrp = [];

              for (let i = 0; i < scripts.length; i++) {
                let item;
                if (i < urlList.length) {
                  item = {
                    contents: scripts[ i ].contents,
                    response: parseInt(scripts[ i ].response),
                    url: urlList[ i ]
                  }
                }
                else {
                  item = {
                    contents: scripts[ i ].contents,
                    response: parseInt(scripts[ i ].response),
                    url: ''
                  }
                }

                scrp.push(item)
              }

              const data = {
                scripts: scrp,
                commentary: simul.commentary,
                custom: simul.custom
              };

              return res.status(200).json(data);

            }
          })
        })
      }).catch((e) => {
        return res.status(400);
      });

    } catch (error) {
      return res.status(400);
    }
  },
  msgDoneList: async function (req, res, next) {
    try {
      const type = "msg";
      const user = await User.findOne({where: {id: req.user_id}});
      const simulCustom = await isCustom(user, type);
      const simul = await SimulData.findAll({
        where: {
          type: type,
        },
        attributes: [ "simulNum", "title", "commentary" ],
        raw: true,
      });
      const history = await History.findAll({
        where: {
          user_id: user.id,
          type: "msg",
        },
        attributes: [ "simulNum" ],
        raw: true,
      });
      const done = history.map((x) => Number(x.simulNum));

      for (const i of simul) {
        if (done.includes(i.simulNum)) {
          i[ 'done' ] = 'true'
        } else {
          i[ 'done' ] = 'false'
        }
        if (simulCustom.includes(i.simulNum)) {
          i[ 'isCustom' ] = 'true'
        } else {
          i[ 'isCustom' ] = 'false'
        }
      }
      return res.status(200).json(simul);
    } catch (error) {
      return res.status(500);
    }
  },
  msgSimul: async function (req, res, next) {
    try {
      const scripts = await Msg.findAll({
        where: {
          num: req.params.num,
        },
        attributes: [ "contents", "response" ],
        raw: true,
      });
      const scrp = [];
      scripts.map((x) => {
        scrp.push([ x.contents, parseInt(x.response) ]);
      });

      const simul = await SimulData.findOne({
        where: {
          type: "msg",
          simulNum: req.params.num,
        },
        attributes: [ "commentary", "custom" ],
        raw: true,
      });

      const data = {
        scripts: scrp,
        commentary: simul.commentary,
        custom: simul.custom
      };

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500);
    }
  },
  snsDoneList: async function (req, res, next) {
    try {
      const type = "sns";
      const user = await User.findOne({where: {id: req.user_id}});
      const simulCustom = await isCustom(user, type);
      const simul = await SimulData.findAll({
        where: {
          type: type,
        },
        attributes: [ "simulNum", "title", "commentary" ],
        raw: true,
      });
      const history = await History.findAll({
        where: {
          user_id: user.id,
          type: "sns",
        },
        attributes: [ "simulNum" ],
        raw: true,
      });
      const done = history.map((x) => Number(x.simulNum));
      for (const i of simul) {
        if (done.includes(i.simulNum)) {
          i[ 'done' ] = 'true'
        } else {
          i[ 'done' ] = 'false'
        }
        if (simulCustom.includes(i.simulNum)) {
          i[ 'isCustom' ] = 'true'
        } else {
          i[ 'isCustom' ] = 'false'
        }
      }

      return res.status(200).json(simul);
    } catch (error) {
      return res.status(500);
    }
  },
  snsSimul: async function (req, res, next) {
    try {
      const scripts = await Sns.findAll({
        where: {
          num: req.params.num,
        },
        attributes: [ "contents", "response" ],
        raw: true,
      });
      const scrp = [];
      scripts.map((x) => {
        scrp.push([ x.contents, parseInt(x.response) ]);
      });

      const simul = await SimulData.findOne({
        where: {
          type: "sns",
          simulNum: req.params.num,
        },
        attributes: [ "commentary", "custom" ],
        raw: true,
      });

      const data = {
        scripts: scrp,
        commentary: simul.commentary,
        custom: simul.custom
      };

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500);
    }
  },
  addDoneList: async function (req, res, next) {
    try {
      const {type, simulNum} = req.body;
      const user = await User.findOne({where: {id: req.user_id}});

      const [ history, created ] = await History.findOrCreate({
        where: {
          user_id: user.id,
          type: type,
          simulNum: simulNum
        }
      })

      if (created) {
        return res.status(200).json({message: "simulation done"})
      } else {
        return res.status(201).json({message: "already done"})
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  showHistory: async function (req, res, next) {
    try {
      const user = await User.findOne({where: {id: req.user_id}});
      const history = await History.findAll({
        where: {
          user_id: user.id,
        },
        attributes: [ "type", "simulNum" ],
        raw: true,
      });
      return res.status(200).json(history);
    } catch (error) {
      return res.status(500);
    }
  }
}
module.exports = simulation;