// to controll all logic that get a single data or all, to delete update etc....
const product = require("../model/Product");
const Product = require("../model/Product");
// const product = require("../model/Product");

//Get all Products

const product_all = async (req,res)=> {
    //Logic
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.json({ productAllcontrollerErrormessage: error})
    }
    
};
// get single product

const product_details = async (req, res)=> {
  //Logic
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
} catch (error) {
    res.json({productDetailscontrollerErrormessage: error})
    console.log(error);
}
};

// add new product

const product_creat = async (req,res) => {
    const product = new Product({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
         });
    try {
        const savedProduct = await product.save();
        res.send(savedProduct);
        } catch (error) {
         res.status(400).send(error);
         console.log(error);
        
    }
};

//update product

const product_update = async (req,res)=> {
    // Logic
    try {
        const product = {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
        };
        const updatedProduct = await Product.findByIdAndUpdate(
           {_id:req.params.productId}, product);
            res.json(updatedProduct);
        
    } catch (error) {
        res.json({message: error});
        console.log(error);
        
    }
};

//delete product 

const product_delete = async (req,res)=> {

    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
    res.json(removeProduct);
    } catch (error) {
        res.json({errorOnDelete : error}); 
        
    }
};

module.exports = {
    product_all,
    product_details,
    product_creat,
    product_update,
    product_delete,
}
