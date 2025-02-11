import express from 'express';
const app = express()
const PORT = 3000


import { databaseInit } from './database/connection.js';
import generateShortUrl from './controller/url.js';
import redirectUrl from './controller/redirectUrl.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
databaseInit();

app.post('/', generateShortUrl);
app.get('/:shortUrl', redirectUrl);

app.listen(PORT, ()=>{
    console.log(`🚀 Server running on port ${PORT}`);
});