const User = require('../models/user.model');
const  asyncHandle = require('../middlewares/asyncHandle');

const userController = {
    getAllUsers: asyncHandle(async (req, res, next) => {
        const users = await User.find();
        res.status(200).json({
            message: "ADMIN: Get all user",
            data: users,
        });
    }),
    
    getUser: asyncHandle(async (req, res, next) => {
        let { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json({
            message: "Get user by id",
            data: user,
        });
    }),
    
    getUsersAgeCondition: asyncHandle(async (req, res, next) => {
        const users = await User.find({ age: { $gte: 18, $lte: 40 }});
        res.status(200).json({
            message: "ADMIN: Get all user (age > 18 and age < 40)",
            data: users,
        });
    }),

    getUsersNameCondition: asyncHandle(async (req, res, next) => {
        const users = await User.find({ name: /^h/ });
        res.status(200).json({
            message: "ADMIN: Get all user with name start with 'h'",
            data: users,
        });
    }),

    createUser: asyncHandle(async (req, res, next) => {
        const newUser = await User.create(req.body);
        res.status(201).json({
            message: "Created user",
            data: newUser,
        });
    }),

    updateUser: asyncHandle(async (req, res, next) => {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            message: "Update user",
            data: user,
        });
    }),

    deleteUser: asyncHandle(async (req, res, next) => {
        let { id } = req.params;
        await User.findByIdAndDelete(id);
        res.status(200).json({
            message: "Delete user",
            data: null,
        });
    }),
}

module.exports = userController;
    