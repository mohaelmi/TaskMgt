
const { Pool } = require('pg');


const dbParams = {
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  database: 'postgres', // Default database for creating other databases
};

const db = new Pool(dbParams);

db.connect();

module.exports = db;
