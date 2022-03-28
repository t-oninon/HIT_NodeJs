const jwt = require("jsonwebtoken");
const asyncHandle = require("../middlewares/asyncHandle");

const encode = asyncHandle(async (req, res) => {
    const { text } = req.body;
    const code = jwt.sign({ text }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({
        message: "Encoded succesfully",
        convert: code 
    });
});

const decode = asyncHandle(async (req, res) => {
    const decode = jwt.verify(req.body.code, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({
        message: "Decoded succesfully",
        data: decode 
    });
});

module.exports = { encode, decode }

