// const { Pool } = require('pg');
// const sqlite3 = require('sqlite3');
// require('dotenv').config();

// let db;

// if (process.env.NODE_ENV === 'production') {
//   // Use PostgreSQL for production
//   const dbParams = {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
//   };

//   db = new Pool(dbParams);
// } else {
//   // Use SQLite for development and testing
//   db = new sqlite3.Database('./dev.sqlite3');
// }

// module.exports = db;


const { Pool } = require('pg');
require('dotenv').config();

const dbParams = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
};

const db = new Pool(dbParams);

db.connect();

module.exports = db;
