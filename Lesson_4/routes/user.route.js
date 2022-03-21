const userController = require('../controllers/user.controller');
const authMiddleware = require("./../middlewares/auth.middleware");
const router = require("express").Router();

router.route("/")
    .get(authMiddleware.authorization, userController.getAllUsers)
    .post(userController.createUser);

router.route("/age-condition")
    .get(authMiddleware.authorization, userController.getUsersAgeCondition);

router.route("/name_condition")
    .get(authMiddleware.authorization, userController.getUsersNameCondition);

router
    .route("/:id")
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(authMiddleware.authorization, userController.deleteUser);

module.exports = router;