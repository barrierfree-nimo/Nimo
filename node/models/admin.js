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
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        type: {
          type: Sequelize.STRING(200),
          allowNull: false,
          unique: false,
        },
        block_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Admin",
        tableName: "admin",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      },
    );
  }

  static associate(db) {
    db.Comment.belongsTo(db.User, {foreignKey: "user_id", targetKey: "id"});
}
};
