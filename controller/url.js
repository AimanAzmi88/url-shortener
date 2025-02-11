import { pool } from "../database/connection.js";
import { nanoid } from "nanoid";
import dotenv from "dotenv"
dotenv.config();
const BASE_URL = process.env.BASE_URL

const query = `
    INSERT INTO urls (original_url, short_url)
    VALUES ($1, $2)
    RETURNING *;
`

const generateShortUrl = async (req, res) => {
    try {
        const url = req.body.url
        const shortUrl = nanoid(10);

        if (!url) {
            return res.status(400).json('Please provide a valid URL');
        }
        
        const existingUrl = await pool.query('SELECT * FROM urls WHERE original_url = $1', [url]);
        if (existingUrl.rows.length > 0) {
            return res.status(409).json('URL already exists');
        }
        

        const result = await pool.query(query, [url, shortUrl]);
        res.status(201).json(BASE_URL + result.rows[0].short_url);
        
    } catch (e) {
        console.error(e);
        res.status(500).send('Error generating short URL');
    }
}

export default generateShortUrl;