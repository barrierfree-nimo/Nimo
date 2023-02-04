const Sequelize = require("sequelize");

module.exports = class BlackPost extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        black_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "BlackPost",
        tableName: "black_posts",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.BlackPost.belongsTo(db.User, {foreignKey: "user_id", targetKey: "id"});
    db.BlackPost.belongsTo(db.Post, {foreignKey: "black_id", targetKey: "id"});
  }
};
