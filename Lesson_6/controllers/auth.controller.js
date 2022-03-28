const jwt = require("jsonwebtoken");
const User = require('../models/user.model');
const asyncHandle = require('../middlewares/asyncHandle');

module.exports.login = asyncHandle(async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    console.log(user);
    if (!user) {
        return res.status(400).json({ message: "User does not exit" });
    }

    if (!(await user.isCorrectPassword(password))) {
        return res.status(400).json({ message: "Incorrect password, Please resend!" });
    }

    const token = jwt.sign(
        { username }, process.env.SECRET_KEY, { expiresIn: '1h' }
    );

    // const Headers = require("node-fetch");

    // let headers = new Headers();  
    // headers.append('Authorization','Bearer ' + token);
    
    // res.append('Authorization', ('Bearer ' + token));
    // res.cookie('token', token);
    res.status(200).json({
        status: "Logged in successfully",
        token: token,
    });
    next();
});

module.exports.forgetPassword = asyncHandle(async (req, res, next) => {
    const { email } = req.body;

    if (!email) {
        return res.send("Email bắt buôc");
    }

    console.log(email);

    const user = await User.findOne({ email });

    console.log(user);
    if (!user) {
        return res.send("Người dùng không tồn tại");
    }

    let code = await user.createResetPasswordTokent();

    // await user.save({ validateBeforeSave: false });
    res
        .status(200)
        .json({ url: `localhost:3000/api/change-password?code=${code}` });
    next();
});

module.exports.changePassword = asyncHandle(async (req, res, next) => {
    const { code } = req.query;
    const { newpassword } = req.body;

    if (!newpassword) {
      return res.status(401).send("Please! Enter new password");
    }

    const user = await User.findOne({
      reset_password_token: code,
      reset_password_expire: { $gte: Date.now() },
    });

    if (!user) {
      return res.send("User does not exist or link is invalid");
    }

    user.password = newpassword;
    await user.save();
    return res.send("Successfully, Reset password");

    next();
});