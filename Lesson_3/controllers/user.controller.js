const User = require("../models/user.model");

const userController = {  
    getAllUser: async (req, res) => {
        const users = await User.find()
        res.status(200).json(users);
    },

    getUser: async (req, res) => {
        const { id } = req.params;
        const user = await user.findById(id);
        res.status(200).json(user);
    },
  
    createUser: async (req, res) => {
        await User.create(req.body)
        res.status(201).send("Successfully added user")
    },
  
    updateUser: async (req, res) => {
        let { id } = req.params;
        await User.findByIdAndUpdate(id, req.body)
        res.status(200).send("Successfully updated user")
    },
  
    deleteUser: async (req, res) => {
        let { id } = req.params;
        await User.findByIdAndDelete(id)
        res.status(200).send("Successfully deleted user")
    }
};
  
module.exports = userController;