const express = require('express');
const cors = require('cors');
require('dotenv').config();

const firmaRoutes = require('./routes/firmaRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Route'lar
app.use('/firmalar', firmaRoutes);
app.use('/auth', authRoutes); // Giriş route'u

// Başlat
app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
