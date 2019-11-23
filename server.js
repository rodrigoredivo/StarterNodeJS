//IMPORTANDO EXPRESS
const express = require("express");
//IMPORTANDO CORS
const cors = require("cors");
//IMPORTANDO MONGOOSE DB
const mongoose = require("mongoose");
//IMPORTANDO require-dir
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DataBase
mongoose.connect(
  "mongodb://localhost:27017/nodeapi",
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));
// Porta utilizada na API
app.listen(3001);
