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
        birth: {
          type: Sequelize.DATE(),
          allowNull: true,
        },
        gender: {
          type: Sequelize.STRING(10),
          allowNull: true
        },
        job: {
          type: Sequelize.STRING(45),
          allowNull: true
        },
        interest: {
          type: Sequelize.STRING(45),
          allowNull: true
        },
        offspring: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        bank: {
          type: Sequelize.STRING(45),
          allowNull: true
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "UserInfo",
        tableName: "user_info",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.UserInfo.belongsTo(db.User, {foreignKey: "userId", targetKey: "id"});
  }
};
