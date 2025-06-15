const express = require('express');
const router = express.Router();
const firmaController = require('../controllers/firmaController');
const authMiddleware = require('../middlewares/authMiddleware');

// Sadece giriş yapmış kullanıcılar görebilsin
router.get('/', authMiddleware(), firmaController.getFirmalar);

// Sadece admin görebilsin örneğin
router.get('/:id', authMiddleware(['admin']), firmaController.getFirmaById);

module.exports = router;


