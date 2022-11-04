const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Msg = require('./msg');
const SimulData = require('./simuldata');
const History = require('./history')

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config, 
);

db.sequelize = sequelize;

db.User=User;
db.Msg=Msg;
db.SimulData=SimulData;
db.History=History;

User.init(sequelize);
Msg.init(sequelize);
SimulData.init(sequelize);
History.init(sequelize);

User.associate(db);

module.exports = db;
