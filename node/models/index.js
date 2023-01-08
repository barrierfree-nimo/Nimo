const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[ env ];
const User = require('./user');
const Quiz = require('./quiz');
const Voice = require('./voice')
const Msg = require('./msg');
const Sns = require('./sns');
const SimulData = require('./simuldata');
const History = require('./history');
const Post = require('./post');
const Comment = require('./comment');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config
);

db.sequelize = sequelize;

db.User = User;
db.Voice = Voice;
db.Msg = Msg;
db.Sns = Sns;
db.SimulData = SimulData;
db.History = History;
db.SimulData = SimulData;
db.History = History;
db.Quiz = Quiz;
db.Post = Post;
db.Comment = Comment;

User.init(sequelize);
Voice.init(sequelize);
Msg.init(sequelize);
Sns.init(sequelize);
SimulData.init(sequelize);
History.init(sequelize);
Quiz.init(sequelize);
Post.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Post.associate(db);
Comment.associate(db);

module.exports = db;
