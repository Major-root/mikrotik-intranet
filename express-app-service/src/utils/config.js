const dotenv = require("dotenv");

dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  database_dev: {
    name: process.env.DEVELOPMENT_DB_NAME,
    user: process.env.DEVELOPMENT_DB_USERNAME,
    password: process.env.DEVELOPMENT_DB_PASSWORD,
    host: process.env.DEVELOPMENT_DB_HOST,
    port: process.env.DEVELOPMENT_DB_PORT,
  },
  database_prod: {
    name: process.env.PRODUCTION_DB_NAME,
    user: process.env.PRODUCTION_DB_USERNAME,
    password: process.env.PRODUCTION_DB_PASSWORD,
    host: process.env.PRODUCTION_DB_HOST,
    port: process.env.PRODUCTION_DB_PORT,
  },
};

module.exports = config;
