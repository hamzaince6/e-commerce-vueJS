const express = require('express');
const path = require('path');
const cors = require('cors');
const { getConnection } = require('./db'); // Veritabanı bağlantısını sağlayan modül

const app = express();
const port = 3000;

// CORS ayarlarını yapın
app.use(cors());

// Statik dosyaları servis et
app.use(express.static(path.join(__dirname, 'public')));

// Veritabanından tüm ürünleri almak için API rotası
app.get('/api/products', async (req, res) => {
    let pool;
    try {
        pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM Products');
        res.json(result.recordset); // JSON olarak yanıt döndür
    } catch (err) {
        console.error('Veritabanı hatası:', err);
        res.status(500).send('Veritabanı hatası');
    } finally {
        if (pool) {
            try {
                await pool.close();
            } catch (closeErr) {
                console.error('Bağlantı kapatma hatası:', closeErr);
            }
        }
    }
});

// Kategorileri almak için API rotası
app.get('/api/categories', async (req, res) => {
    let pool;

    try {
        pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM Categories'); // Kategorileri sorgula
        res.json(result.recordset); // JSON olarak yanıt döndür
    } catch (err) {
        console.error('Veritabanı hatası:', err);
        res.status(500).send('Veritabanı hatası');
    } finally {
        if (pool) {
            try {
                await pool.close();
            } catch (closeErr) {
                console.error('Bağlantı kapatma hatası:', closeErr);
            }
        }
    }
});

// Müşterileri almak için API rotası
app.get('/api/customers', async (req, res) => {
    let pool;

    try {
        pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM Customers'); // Müşterileri sorgula
        res.json(result.recordset); // JSON olarak yanıt döndür
    } catch (err) {
        console.error('Veritabanı hatası:', err);
        res.status(500).send('Veritabanı hatası');
    } finally {
        if (pool) {
            try {
                await pool.close();
            } catch (closeErr) {
                console.error('Bağlantı kapatma hatası:', closeErr);
            }
        }
    }
});


// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} portunda çalışıyor`);
});
