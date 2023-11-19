
const { Pool } = require('pg');
require('dotenv').config();

const dbParams = {
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE, 
};

const db = new Pool(dbParams);

db.connect();

module.exports = db;
