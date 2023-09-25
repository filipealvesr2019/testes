const express = require("express");
const routes = express.Router();
const UserController = require("../controllers/userController")
routes.get("/", (req, res) => {
    res.send("Olá, mundo!");
});
// rotas do login
routes.post("/users", UserController.createUser)
routes.get("/users")
routes.get("/users/:user_id")
routes.post("/users/login")


// rotas dos produtos
routes.post("/products/user_id")
routes.get("/products/user_id")
routes.patch("/products/user_id/:product_id")
routes.delete("/products/user_id/:product_id")

routes.get("/products")
routes.get("products/product_id")


// rotas do carinho de compras
routes.post("cart/:user_id")
routes.get("/cart/:user_id")

routes.get("cart/:user_id/:cart_id")







module.exports = routes;
