const Sequelize = require("sequelize");
const bcrypt = require('bcrypt');

module.exports = class User extends Sequelize.Model {
  validPassword(password) {
    return bcrypt.compareSync(password, this.password)
  }

  static init(sequelize) {
    return super.init(
      {
        id: {
          field: "id",
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        userId: {
          field: "user_id",
          type: Sequelize.STRING(45),
          allowNull: false,
          unique: true,
        },
        nickname: {
          type: Sequelize.STRING(45),
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(150),
          allowNull: false,
          unique: false,
        },
        quizNum: {
          type: Sequelize.INTEGER,
          allowNull: true,
          default: 0,
        },
        refresh_token: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        custom: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        push_token: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        push_ok: {
          type: Sequelize.TINYINT(1),
          allowNull: false,
          default: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Post, {foreignKey: "user_id", sourceKey: "id"});
    db.User.hasMany(db.Comment, {foreignKey: "user_id", sourceKey: "id"});
    db.User.hasMany(db.BlackUser, {foreignKey: "user_id", sourceKey: "id"});
    db.User.hasMany(db.BlackComment, {foreignKey: "user_id", sourceKey: "id"});
    db.User.hasMany(db.Admin, {foreignKey: "user_id", sourceKey: "id"});
    db.User.hasMany(db.History, {foreignKey: "user_id", sourceKey: "id"});
  }
};
