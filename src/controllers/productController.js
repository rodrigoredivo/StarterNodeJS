const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    const products = await Product.find();
    
    return res.json(products);
  },

  async store(req, res){
    const product = await Product.create(req.body);

    const {title, description, url} = product
    return res.json({title,description,url})

    //return res.json(product);
  } 
};