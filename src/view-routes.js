const express = require('express');

const router = express.Router();
const path = require('path');

const views = './src/views';

router.get('/', (req, res) => {
  res.sendFile(path.resolve('./src', 'index.html'));
});

router.get('/registration', async (req, res) => {
  res.sendFile(path.resolve(views, 'registration-page.html'));
});

module.exports = router;
