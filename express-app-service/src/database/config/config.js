const config = require("../../utils/config");

module.exports = {
  development: {
    username: config.database_dev.user,
    password: config.database_dev.password,
    database: config.database_dev.name,
    host: config.database_dev.host,
    dialect: "postgres",
    port: config.database_dev.port || 5432,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },

  production: {
    username: config.database_prod.user,
    password: config.database_prod.password,
    database: config.database_prod.name,
    host: config.database_prod.host,
    dialect: "postgres",
    port: config.database_prod.port,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
