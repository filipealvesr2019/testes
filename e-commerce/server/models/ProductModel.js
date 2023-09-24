const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: { type: String, required: true }, // URL da imagem
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;