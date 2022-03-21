const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = require('./user.model')

const postSchema = new Schema({
    description: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
}, { timestamp: true });

module.exports = mongoose.model('Post', postSchema);