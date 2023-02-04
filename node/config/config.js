require("dotenv").config();

module.exports = {
  development: {
    username: "admin",
    password: process.env.SEQUELIZE_PASSWORD,
    database: process.env.SEQUELIZE_DATABASE,
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
    timezone: "+09:00"
  },
  test: {
    username: "root",
    password: "suhhyun",
    database: "nimo",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
    timezone: "+09:00"
  },
  production: {
    username: "admin",
    password: process.env.SEQUELIZE_PASSWORD,
    database: process.env.SEQUELIZE_DATABASE,
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
    timezone: "+09:00"
  },
};
