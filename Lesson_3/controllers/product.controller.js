const Product = require("../models/product.model");

const productsController = {  
    getAllProduct: async (req, res) => {
        const products = await Product.find()
        res.status(200).json(products);
    },

    getProduct: async (req, res) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    },
  
    creatProduct: async (req, res) => {
        await Product.create(req.body)
        res.status(201).send("Successfully added product")
    },
  
    updateProduct: async (req, res) => {
        let { id } = req.params;
        await Product.findByIdAndUpdate(id, req.body)
        res.status(200).send("Successfully updated product")
    },
  
    deleteProduct: async (req, res) => {
        let { id } = req.params;
        await Product.findByIdAndDelete(id)
        res.status(200).send("Successfully deleted product")
    }
};
  
module.exports = productsController;