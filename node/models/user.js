const Sequelize = require('sequelize');

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
				userId: {
						type: Sequelize.INTEGER,
						allowNull: false,
						unique: true,
					},
				password: {
					type: Sequelize.STRING(20),
					allowNull: false,
					unique: false,
				},
				nickname: {
					type: Sequelize.STRING(20),
                    allowNull: false,
                    unique: true,
				},
				quizNum: {
					type: Sequelize.INTEGER,
					allowNull: true,
					default: 0,
				}
			},
			{
				sequelize,
				timestamps:false,
				underscored:false,
				modelName:'User',
				tableName:'users',
				paranoid:false,
				charset:'utf8',
				collate:'utf8_general_ci',
			}
        );
    }

    static associate(db) {
		//db.User.hasMany(db.Post);
	}
};
