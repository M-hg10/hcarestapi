// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const firmaRoutes = require('./routes/firmaRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Route'lar
app.use('/firmalar', firmaRoutes);


// Başlat
app.listen(PORT, () => {
  console.log(`🚀 API sunucusu http://localhost:${PORT} üzerinden çalışıyor`);
});
// Bu kod, Express.js ile bir API sunucusu oluşturur.
// CORS ve JSON gövde ayrıştırma için middleware kullanır.