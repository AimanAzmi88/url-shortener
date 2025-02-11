import { pool } from '../database/connection.js';

const query = `
    CREATE TABLE IF NOT EXISTS urls (
    id SERIAL PRIMARY KEY,
    original_url TEXT UNIQUE NOT NULL,
    short_url VARCHAR(15) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

const urlTable = async () => {
    try {
        await pool.query(query)
        console.log('URL table created successfully');
    } catch (e) {
        console.error(e);
    }
}

export default urlTable;