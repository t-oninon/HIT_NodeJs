const mongoose = require('mongoose');
const { Schema } = mongoose;
const Post = require('./post.model');
const bcrypt = require("bcryptjs");

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

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
  
    this.password = await bcrypt.hash(this.password, 6);
  
    next();
});
  
userSchema.methods.isCorrectPassword = async function (password) {
    const user = this;
    return await bcrypt.compare(password, user.password);
};


module.exports = mongoose.model('User', userSchema);