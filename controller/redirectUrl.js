import { pool } from "../database/connection.js";

const query = `SELECT original_url FROM urls WHERE short_url = $1`;

const redirectUrl = async (req, res) => {
    const { shortUrl } = req.params;

    try {
        const result = await pool.query(query, [shortUrl]);

        if (result.rows.length > 0) {
            const originalUrl = result.rows[0].original_url;
            res.redirect(301, originalUrl);
        } else {
            res.status(404).json({ message: "URL not found" });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default redirectUrl;
