const Sequelize = require("sequelize");

module.exports = class BlackUser extends Sequelize.Model {
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
        black_nickname: {
            type: Sequelize.STRING(45),
            allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "BlackUser",
        tableName: "black_users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.BlackUser.belongsTo(db.User, {foreignKey: "user_nickname", targetKey: "nickname"});
    db.BlackUser.belongsTo(db.User, {foreignKey: "black_nickname", targetKey: "nickname"});
  }
};
