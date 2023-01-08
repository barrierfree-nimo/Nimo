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
        post_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: false,
        },
        user_nickname: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        contents: {
          type: Sequelize.STRING(200),
          allowNull: false,
          unique: false,
        },
        createdAt: {
          field: 'created_at',
          type: "TIMESTAMP",
        },
        updatedAt: {
          field: 'updated_at',
          type: "TIMESTAMP",
        }
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Comment",
        tableName: "comments",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      },
    );
  }

  static associate(db) {
    db.Comment.belongsTo(db.Post, { foreignKey: "post_id", targetKey: "id"});
    db.Comment.belongsTo(db.User, {foreignKey: "user_nickname", targetKey: "nickname"});

  }
};
