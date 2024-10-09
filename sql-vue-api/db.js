require('dotenv').config();
console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_SERVER, process.env.DB_NAME, process.env.DB_PORT);
const sql = require('mssql');


const config = {
    user: process.env.DB_USER, // Kullanıcı adı
    password: process.env.DB_PASSWORD, // Şifre
    server: process.env.DB_SERVER, // Sunucu adı
    database: process.env.DB_NAME, // Veritabanı adı
    port: parseInt(process.env.DB_PORT, 10), // Port numarası
    options: {
        encrypt: false, // Eğer SSL/TLS şifrelemesi gerekiyorsa true olarak ayarlayın
        trustServerCertificate: true // Sertifika doğrulamasını geçmek için
    },
};

async function getConnection() {
    try {
        console.log('Connection config:', config); // Konfigürasyonu konsola yazdır
        const pool = await sql.connect(config);
        console.log('Veritabanı bağlantısı başarılı!');
        return pool;
    } catch (err) {
        console.error('Veritabanı bağlantısı hatası:', err);
        throw err;
    }
}


module.exports = { getConnection }; // Fonksiyonu dışa aktar
