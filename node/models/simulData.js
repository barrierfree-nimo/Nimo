const Sequelize = require('sequelize');

module.exports = class SimulData extends Sequelize.Model {
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
				title: {
					type: Sequelize.STRING(50),
					allowNull: false,
					unique: true,
				},
				commentary: {
					type: Sequelize.STRING(200),
					allowNull: false,
					unique: false,
				},
				custom: {
					type: Sequelize.STRING(100),
					unique: false,
				}
			},
			{
				sequelize,
				timestamps:false,
				underscored:false,
				modelName:'SimulData',
				tableName:'simulation_data',
				paranoid:false,
				charset:'utf8',
				collate:'utf8_general_ci',
			}
        );
    }
};
