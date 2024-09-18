require('dotenv').config();
const sql = require('mssql');

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT, 10),
    options: {
        encrypt: false, // Eğer SSL/TLS şifrelemesi gerekiyorsa true olarak ayarlayın
        trustServerCertificate: true // Sertifika doğrulamasını geçmek için
    },
};

async function getConnection() {
    try {
        const pool = await sql.connect(config);
        console.log('Veritabanı bağlantısı başarılı!');
        return pool;
    } catch (err) {
        console.error('Veritabanı bağlantısı hatası:', err);
        throw err;
    }
}

module.exports = { getConnection };
