
const { Pool } = require('pg');
require('dotenv').config();

const dbParams = {
  host: "localhost",
  user: "labber",
  password: "labber",
  port: 5432,
  database: "taskmanager"
};

const db = new Pool(dbParams);

db.connect();

module.exports = db;
