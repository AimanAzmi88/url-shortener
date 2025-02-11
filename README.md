# 🌐 URL Shortener API

A simple URL shortener built with **Node.js**, **Express**, and **PostgreSQL**.

## 🚀 Features

- Generate short URLs from long URLs
- Redirect short URLs to the original URLs
- Uses PostgreSQL for database storage
- `.env` support for secure configuration

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

git clone https://github.com/AimanAzmi88/url-shortener.git
cd url-shortener

1️⃣ Install Dependencies
npm install

2️⃣ Configure Environment Variables
Create a .env file in the root folder and add:

PORT=3000
BASE_URL=http://localhost:3000

DB_USER=postgres
DB_HOST=localhost
DB_NAME=url
DB_PASSWORD=yourpassword
DB_PORT=5432

3️⃣ Start the Server
npm run dev

📌 API Endpoints
1️⃣ Create a Short URL
Endpoint: POST /
Request Body: {
"url": "https://example.com"
}
Response:{
"http://localhost:3000/AbCdEf1234"
}

2️⃣ Redirect to Original URL
Endpoint: GET /:shortUrl
Example Request: GET http://localhost:3000/AbCdEf1234

🏗️ Technologies Used
Node.js + Express
PostgreSQL
Nanoid (for short URL generation)
dotenv (for environment variables)

🚀 Happy Coding! 😊
