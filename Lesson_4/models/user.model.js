const mongoose = require('mongoose');
const { Schema } = mongoose;
const Post = require('./post.model')

const userSchema = new Schema({
    username: {
        type: String,
        require: true, 
        unique: true,
    },
    password: {
        type: String,
        require: [true, "Please provide a password"],
        minlenght: 8,
    },
    name: String,
    age: Number,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
})

module.exports = mongoose.model('User', userSchema);