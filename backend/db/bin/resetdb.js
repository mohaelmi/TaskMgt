// backend/db/bin/resetdb.js

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const db = require('../database'); // Using the database configuration

async function resetDatabase() {
  const dbName = 'taskmanager'; // Your desired database name

  try {
    // Check if the database exists
    const checkDbQuery = `SELECT 1 FROM pg_database WHERE datname = $1`;
    const checkResult = await db.query(checkDbQuery, [dbName]);

    if (checkResult.rows.length === 0) {
      // If the database doesn't exist, create it
      const createDbQuery = `CREATE DATABASE ${dbName}`;
      await db.query(createDbQuery);
    }

    // Connect to the specific database
    const dbConnection = new Pool({ ...db.options, database: dbName });

    // Read SQL files
    const tablesSQL = fs.readFileSync(path.join(__dirname, '../../db/schema/tables.sql'), 'utf8');
    const seedsSQL = fs.readFileSync(path.join(__dirname, '../../db/schema/seeds.sql'), 'utf8');

    // Run SQL queries
    await dbConnection.query(tablesSQL);
    await dbConnection.query(seedsSQL);

    console.log('Database reset completed!');
  } catch (error) {
    console.error('Error resetting database:', error);
  } finally {
    await db.end(); // Close the original connection
  }
}

resetDatabase();