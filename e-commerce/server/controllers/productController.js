const Product = require('../models/productModel');

// Função para criar um novo produto
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = new Product({ name, price, description });
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o produto' });
  }
};
