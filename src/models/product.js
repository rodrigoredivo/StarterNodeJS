// IMPORTANDO O MONGOOSE 
const mongoose = require("mongoose");
// IMPORTANDO O MONGOOSEPAGINATE
const mongoosePaginate = require("mongoose-paginate");
//CRIANDO TABELA NO BANCO DE DADOS
const ProductSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema);