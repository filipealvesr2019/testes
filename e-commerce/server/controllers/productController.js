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















// Listar todos os produtos
exports.getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar produtos' });
    }
  };
  
  // Obter detalhes de um produto por ID
  exports.getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter detalhes do produto' });
    }
  };
  












  // Atualizar um produto por ID
exports.updateProductById = async (req, res) => {
    try {
      const { name, price, description } = req.body;
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { name, price, description },
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o produto' });
    }
  };
  


// Excluir um produto por ID
exports.deleteProductById = async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndRemove(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      res.json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir o produto' });
    }
  };
  







