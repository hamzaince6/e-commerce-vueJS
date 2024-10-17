require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const { getConnection } = require('./db');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = ['http://localhost:8080', 'https://e-commercevuejs.netlify.app'];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('CORS policy: This origin is not allowed'));
        }
    }
}));

app.use(express.static(path.join(__dirname, 'public')));

let pool;

const getPool = async () => {
    if (!pool) {
        pool = await getConnection();
    }
    return pool;
};

app.get('/api/products', async (req, res) => {
    try {
        const pool = await getPool();
        const result = await pool.request().query('SELECT * FROM Products');
        res.json(result.recordset);
    } catch (err) {
        console.error('Veritabanı hatası:', err);
        res.status(500).json({ message: 'Bir hata oluştu, lütfen daha sonra tekrar deneyin.' });
    }
});

app.get('/api/categories', async (req, res) => {
    try {
        const pool = await getPool();
        const result = await pool.request().query('SELECT * FROM Categories');
        res.json(result.recordset);
    } catch (err) {
        console.error('Veritabanı hatası:', err);
        res.status(500).json({ message: 'Bir hata oluştu, lütfen daha sonra tekrar deneyin.' });
    }
});

app.get('/api/customers', async (req, res) => {
    try {
        const pool = await getPool();
        const result = await pool.request().query('SELECT * FROM Customers');
        res.json(result.recordset);
    } catch (err) {
        console.error('Veritabanı hatası:', err);
        res.status(500).json({ message: 'Bir hata oluştu, lütfen daha sonra tekrar deneyin.' });
    }
});

app.use((req, res, next) => {
    res.status(404).json({ message: 'Sayfa bulunamadı' });
});

app.use((err, req, res, next) => {
    console.error('Sunucu hatası:', err.stack);
    res.status(500).json({ message: 'Bir hata oluştu, lütfen daha sonra tekrar deneyin.' });
});

// Sunucu kapatıldığında veritabanı bağlantısını kapat
process.on('SIGINT', async () => {
    if (pool) {
        await pool.close();
        console.log('Veritabanı bağlantısı kapatıldı.');
    }
    process.exit();
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} portunda çalışıyor`);
});
