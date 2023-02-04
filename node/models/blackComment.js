const Sequelize = require("sequelize");

module.exports = class BlackComment extends Sequelize.Model {
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
        modelName: "BlackComment",
        tableName: "black_comments",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.BlackComment.belongsTo(db.User, {foreignKey: "user_id", targetKey: "id"});
    db.BlackComment.belongsTo(db.Comment, {foreignKey: "black_id", targetKey: "id"});
  }
};
