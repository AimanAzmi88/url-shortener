import pkg from 'pg';
const { Pool } = pkg;
import urlTable from '../model/url.js';
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});


export const databaseInit = async () => {
    try {
        const dbName = await pool.query("SELECT current_database()")
        const name = dbName.rows[0].current_database

        const dbRes = await pool.query("SELECT NOW()")
        const time = dbRes.rows[0].now

        console.log(`Connected to ${name} database. at: ${time}`);
        await urlTable();
    } catch (e) {
        console.error('Error initializing database:', e);
    }
}