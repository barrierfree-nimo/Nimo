const Sequelize = require('sequelize');

module.exports = class History extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true,
				},
                type: {
					type: Sequelize.STRING(10),
					allowNull: false,
					unique: false,
				},
                simulNum: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    unique: true,
                },
                user_nickname: {
                    type: Sequelize.STRING(45),
                    allowNull: false,
                    unique: true,
                  }
			},
			{
				sequelize,
				timestamps:false,
				underscored:false,
				modelName:'History',
				tableName:'history',
				paranoid:false,
				charset:'utf8',
				collate:'utf8_general_ci',
			}
        );
    }

    static associate(db) {
		//
	}
};
