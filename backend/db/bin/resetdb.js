const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const dbParams = {
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  database: 'postgres', // Default database for creating other databases
};

async function resetDatabase() {
  const dbName = process.env.PGDATABASE; 

  try {
    // Create a pool using the dbParams configuration
    const pool = new Pool(dbParams);

    // Check if the database exists
    const checkDbQuery = `SELECT 1 FROM pg_database WHERE datname = $1`;
    const checkResult = await pool.query(checkDbQuery, [dbName]);

    if (checkResult.rows.length === 0) {
      // If the database doesn't exist, create it
      const createDbQuery = `CREATE DATABASE ${dbName}`;
      await pool.query(createDbQuery);
    }

    // Connect to the specific database
    const dbConnection = new Pool({ ...dbParams, database: dbName });

    // Read SQL files
    const tablesSQL = fs.readFileSync(path.join(__dirname, '../../db/schema/tables.sql'), 'utf8');
    const seedsSQL = fs.readFileSync(path.join(__dirname, '../../db/schema/seeds.sql'), 'utf8');

    // Run SQL queries
    await dbConnection.query(tablesSQL);
    await dbConnection.query(seedsSQL);

    console.log('Database reset completed!');
  } catch (error) {
    console.error('Error resetting database:', error);
  }
}

resetDatabase();
