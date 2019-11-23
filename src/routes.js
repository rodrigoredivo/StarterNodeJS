// IMPORTANDO O EXPRESS
const express = require("express");

const routes = express.Router();
//IMPORTANDO O CONTROLLERS
const ProductController = require("./controllers/productController");

//CRIANDO MINHAS ROTAS DA API
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.delete);

module.exports = routes;