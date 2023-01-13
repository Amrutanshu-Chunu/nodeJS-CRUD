// Schema - what type of data
const mongoose = require("mongoose");
 
const productSchema = new mongoose.Schema({  
 name: String,
 email: String,
 age: String,
});
//  create database
module.exports = mongoose.model("product", productSchema);
