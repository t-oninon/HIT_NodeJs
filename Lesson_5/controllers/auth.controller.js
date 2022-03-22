const jwt = require("jsonwebtoken");
const User = require('../models/user.model');
const asyncHandle = require('../middlewares/asyncHandle');


exports.login = asyncHandle(async (req, res, next) => {
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

    res.status(200).json({
        status: "Logged in successfully",
        token: token,
    });
});