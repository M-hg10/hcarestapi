const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

// Bu route'a sadece admin girebilir
router.get('/liste', auth(['admin']), (req, res) => {
  res.json({ message: `Firma listesi - Kullanıcı: ${req.user.username}` });
});

// Bu route hem admin hem user'a açık
router.get('/profil', auth(['admin', 'user']), (req, res) => {
  res.json({ message: `Firma profili - Kullanıcı: ${req.user.username}` });
});

module.exports = router;

