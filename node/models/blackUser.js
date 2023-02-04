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
        modelName: "BlackUser",
        tableName: "black_users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.BlackUser.belongsTo(db.User, {foreignKey: "user_id", targetKey: "id"});
    db.BlackUser.belongsTo(db.User, {foreignKey: "black_id", targetKey: "id"});
  }
};
