const Product = require("../models/ProductModel");

class ProductController {
  // Listar todos os produtos
  static async listProducts(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error("Erro ao listar produtos:", error);
      res.status(500).json({ error: "Erro ao listar produtos" });
    }
  }

  // Obter detalhes de um produto pelo ID
  static async getProduct(req, res) {
    const productId = req.params.id;
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }
      res.json(product);
    } catch (error) {
      console.error("Erro ao obter produto:", error);
      res.status(500).json({ error: "Erro ao obter produto" });
    }
  }

  // Criar um novo produto
  static async createProduct(req, res) {
    const { image, name, price, description } = req.body;
    try {
      const newProduct = new Product({ image, name, price, description });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      console.error("Erro ao criar produto:", error);
      res.status(500).json({ error: "Erro ao criar produto" });
    }
  }
  
  // Atualizar um produto pelo ID
  static async updateProduct(req, res) {
    const productId = req.params.id;
    const { image, name, price, description } = req.body;
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { image, name, price, description },
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }
      res.json(updatedProduct);
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      res.status(500).json({ error: "Erro ao atualizar produto" });
    }
  }

  // Excluir um produto pelo ID
  static async deleteProduct(req, res) {
    const productId = req.params.id;
    try {
      const deletedProduct = await Product.findByIdAndRemove(productId);
      if (!deletedProduct) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      res.status(500).json({ error: "Erro ao excluir produto" });
    }
  }

  
}



module.exports = ProductController;
