require("dotenv").config();

module.exports = {
  development: {
    username: "admin",
    password: process.env.SEQUELIZE_PASSWORD,
    database: process.env.SEQUELIZE_DATABASE,
    host: "database-nimo.cc9lwgerupgb.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql",
    logging: false,
  },
  test: {
    username: "admin",
    password: process.env.SEQUELIZE_PASSWORD,
    database: process.env.SEQUELIZE_DATABASE,
    host: "database-nimo.cc9lwgerupgb.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: "admin",
    password: process.env.SEQUELIZE_PASSWORD,
    database: process.env.SEQUELIZE_DATABASE,
    host: "database-nimo.cc9lwgerupgb.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql",
    logging: false,
  },
};
