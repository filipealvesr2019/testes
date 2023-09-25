const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/database');
const productRoutes = require('./routes/productRoutes');

app.use(bodyParser.json());


// Rotas de produtos
app.use('/', productRoutes);
app.use('/', productRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
