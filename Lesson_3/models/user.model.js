const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String, 
    age: { type: Number, min: 4, max: 100 },
    balance: Number,
})

module.exports = mongoose.model("User", userSchema);