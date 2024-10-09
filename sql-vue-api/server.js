const express = require('express');
const path = require('path');
const cors = require('cors');
const { getConnection } = require('./db');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = ['http://localhost:8080', 'https://e-commercevuejs.netlify.app/'];
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
const connectToDatabase = async () => {
    try {
        if (!pool) {
            pool = await getConnection();
            console.log("Veritabanına bağlantı sağlandı");
        }
    } catch (err) {
        console.error("Veritabanı bağlantı hatası:", err.message);
    }
};

connectToDatabase();

app.get('/api/products', async (req, res) => {
    try {
        const result = await pool.request().query('SELECT * FROM Products');
        res.json(result.recordset); // JSON olarak yanıt döndür
    } catch (err) {
        console.error('Veritabanı hatası:', err);
        res.status(500).json({ message: 'Veritabanı hatası', error: err.message });
    }
});

app.get('/api/categories', async (req, res) => {
    try {
        const result = await pool.request().query('SELECT * FROM Categories');
        res.json(result.recordset);
    } catch (err) {
        console.error('Veritabanı hatası:', err);
        res.status(500).json({ message: 'Veritabanı hatası', error: err.message });
    }
});

app.get('/api/customers', async (req, res) => {
    try {
        const result = await pool.request().query('SELECT * FROM Customers');
        res.json(result.recordset);
    } catch (err) {
        console.error('Veritabanı hatası:', err);
        res.status(500).json({ message: 'Veritabanı hatası', error: err.message });
    }
});

app.use((req, res, next) => {
    res.status(404).json({ message: 'Sayfa bulunamadı' });
});

app.use((err, req, res, next) => {
    console.error('Sunucu hatası:', err.stack);
    res.status(500).json({ message: 'Sunucu hatası', error: err.message });
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} portunda çalışıyor`);
});
