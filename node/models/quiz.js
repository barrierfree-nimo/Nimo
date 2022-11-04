const Sequelize = require('sequalize');

module.exports = class Quiz extends Sequelize.Model {
  static init(sequalize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
					primaryKey: true,
          unique: true,
        },
        tag: {
          type: Sequelize.STRING(45),
          allowNull:false,
          unique: false
        },
        qText: {
          type: Sequelize.STRING(500),
          allowNull:false,
          unique: false
        },
        qAnswer: {
          type: Sequelize.STRING(500),
          allowNull:false,
          unique: false
        },
        answer: {
          type: Sequelize.STRING(45),
          allowNull:false,
          unique: false
        },
      },
      {
        sequalize,
        timestamps:false,
				underscored:false,
				modelName:'Quiz',
				tableName:'quiz',
				paranoid:false,
				charset:'utf8',
				collate:'utf8_general_ci',
      }
    );
  }
}