const User = require("./../models/user.model");
const asyncHandle = require("./asyncHandle");
          
module.exports.authorization = asyncHandle(async (req, res, next) => {
    let { id } = req.query;

    let user = await User.findById(id);

    if (!user) {
        return res.send('User does not exist');
    }

    if (user.role !== 'admin') {
        return res.send('User are not admin');
    }
    next();
});