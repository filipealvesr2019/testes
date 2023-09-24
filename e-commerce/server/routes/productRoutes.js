const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rota para criar um novo produto
router.post('/', productController.createProduct);

module.exports = router;
