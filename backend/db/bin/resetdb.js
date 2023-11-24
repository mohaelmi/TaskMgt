const fs = require('fs');
const { Pool } = require('pg');
const path = require('path');
require('dotenv').config();

const dbName = process.env.DB_NAME;

async function resetDatabase() {
  const params = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
 
    database: 'postgres', // Default database for creating other databases
  };

  console.log(params);
  const pool = new Pool(params);
  pool.connect()

  // Check if the database exists
  const checkDbQuery = `SELECT 1 FROM pg_database WHERE datname = $1`;
  const checkResult = await pool.query(checkDbQuery, [dbName]);

  if (checkResult.rows.length === 0) {
    // If the database doesn't exist, create it
    const createDbQuery = `CREATE DATABASE ${dbName}`;
    await pool.query(createDbQuery);
  }

  pool.end()
  // Connect to the specific database
  const db = new Pool({ ...params, database: dbName });
  
  // Read SQL files
  const tablesSQL = fs.readFileSync(
    path.join(__dirname, '../../db/schema/tables.sql'),
    'utf8'
    );
    const seedsSQL = fs.readFileSync(
      path.join(__dirname, '../../db/schema/seeds.sql'),
      'utf8'
      );
      
      console.log("FFFFFFFFFGGGGGGGGGGGGGGFFF");
      // Run SQL queries
      // await db.query(`SELECT 1 FROM pg_database WHERE datname='name'`)
      await db.query(tablesSQL);
      await db.query(seedsSQL);
      
  console.log('Database reset completed!');
  db.end()
}

resetDatabase();
