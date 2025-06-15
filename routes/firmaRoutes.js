// routes/firmaRoutes.js
const express = require('express');
const router = express.Router();
const firmaController = require('../controllers/firmaController');

// GET /firmalar
router.get('/', firmaController.getFirmalar);
// GET /firmalar/:id
router.get('/:id', firmaController.getFirmaById);

module.exports = router;
