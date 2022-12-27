const Sequelize = require('sequelize');

module.exports = class Voice extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
        {
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true,
				},
				num: {
					type: Sequelize.INTEGER,
					allowNull: false,
					unique: true,
				},
				contents: {
					type: Sequelize.STRING(500),
					allowNull: false,
					unique: false,
				},
				response: {
					type: Sequelize.INTEGER,
          allowNull: false,
				}
			},
			{
				sequelize,
				timestamps:false,
				underscored:false,
				modelName:'Voice',
				tableName:'scripts_voice',
				paranoid:false,
				charset:'utf8',
				collate:'utf8_general_ci',
			}
        );
    }
};
