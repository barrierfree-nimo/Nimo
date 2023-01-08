const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        user_nickname: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING(45),
          allowNull: false,
          unique: false,
        },
        contents: {
          type: Sequelize.STRING(1000),
          allowNull: false,
          unique: false,
        },
        tag: {
          type: Sequelize.STRING(45),
          allowNull: false,
          unique: false,
        },
        date: {
          type: Sequelize.DATE(),
          defaultValue: Sequelize.DataTypes.NOW,
          allowNull: false,
          unique: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Post",
        tableName: "posts",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Post.belongsTo(db.User, {foreignKey: "user_nickname", targetKey: "nickname"});
    db.Post.hasMany(db.Comment, {foreignKey: "post_id", sourceKey: "id"});
  }
};
