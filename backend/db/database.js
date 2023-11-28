

const { Pool } = require('pg');
require('dotenv').config();

const dbParams = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
//   host: "localhost",
//   user: "labber",
//   password: "labber",
//   port: 5432,
//   database: 'taskmanager',
};

const db = new Pool(dbParams);

module.exports = db;