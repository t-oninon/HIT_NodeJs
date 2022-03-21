const User = require("./../models/user.model");
const asyncHandle = require("./asyncHandle");
const jwt = require("jsonwebtoken");
          
module.exports.authorization = asyncHandle(async (req, res, next) => {
    let { id } = req.query;

    let user = await User.findById(id);

    if (!user) {
        return res.send('User does not exist');
    }

    if (user.role !== 'admin') {
        return res.send('User are not admin');
    }
});

module.exports.protect = asyncHandle(async (req, res, next) => {
    let isRight = req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ");
    if (isRight) {
        const token = req.headers.authorization.split(" ")[1];
        console.log(jwt.verify(token, process.env.SECRET_KEY));
    } else {
        return res.status(401).json({ message: "You don't have token" });
    }
});