const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Quiz = require('./quiz');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config, 
);

db.sequelize = sequelize;

db.User=User;
User.init(sequelize);
User.associate(db);

db.Quiz = Quiz;
Quiz.init(sequelize);
Quiz.associate(db);

module.exports = db;
