const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String, 
    price: Number, 
    amount: Number,
})

module.exports = mongoose.model("Product", productSchema);