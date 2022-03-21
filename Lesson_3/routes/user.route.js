const userController = require("../controllers/user.controller");
const router = require("express").Router();

router.route("/")
    .get(userController.getAllUser)
    .post(userController.createUser)
    
router.route("/:id")
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = router;