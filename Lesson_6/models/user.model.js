const mongoose = require('mongoose');
const { Schema } = mongoose;
const Post = require('./post.model');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new Schema({
    email: String,
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
    reset_password_token: String,
    reset_password_expires: Date,
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

userSchema.methods.createResetPasswordTokent = async function () {
    const resetToken = crypto.randomBytes(15).toString('hex');

    console.log("Forgetpass to: ", { user: this });
    // this.reset_password_token = crypto
    // .createHash("sha256", process.env.RESET_TOKEN_SECRET)
    // .update(resetToken)
    // .digest("hex");
    this.reset_password_token = resetToken;
    this.reset_password_expire =
    (Date.now() + process.env.RESET_TOKEN_EXPIRE * 60 * 1000);
    await this.save();
    return this.reset_password_token;
};

module.exports = mongoose.model('User', userSchema);