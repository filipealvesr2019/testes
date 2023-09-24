const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;

// Middleware para análise de corpo de solicitação JSON
app.use(bodyParser.json());

// Conexão com o banco de dados MongoDB (certifique-se de ter o MongoDB instalado e em execução)
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Importação e uso das rotas de produtos
const productRoutes = require("../server/routes/productRoutes");
app.use("/", productRoutes);
app.use("/api/products", productRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Express rodando na porta http://localhost:${port}`);
});
