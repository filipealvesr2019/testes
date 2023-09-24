const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rota para criar um novo produto
router.post('/api/products', productController.createProduct);
router.get('/api/products', productController.getAllProducts);
router.get('/api/products/:id', productController.getProductById);
router.put('/api/products/:id', productController.updateProductById);
router.delete('/api/products/:id', productController.deleteProductById);
module.exports = router;
