const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

// Rotas para produtos
router.get("/", ProductController.listProducts);
router.get("/", ProductController.getProduct);
router.post("/", ProductController.createProduct);
router.put("/", ProductController.updateProduct);
router.delete("/", ProductController.deleteProduct);

module.exports = router;
