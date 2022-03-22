const userController = require('../controllers/user.controller');
const authMiddleware = require("./../middlewares/auth.middleware");
const router = require("express").Router();

router.route("/")
    .get(authMiddleware.protect, authMiddleware.authorization, userController.getAllUsers)
    .post(authMiddleware.protect,userController.createUser);

router.route("/age-condition")
    .get(authMiddleware.protect, authMiddleware.authorization, userController.getUsersAgeCondition);

router.route("/name_condition")
    .get(authMiddleware.protect, authMiddleware.authorization, userController.getUsersNameCondition);

router
    .route("/:id")
    .get(authMiddleware.protect,userController.getUser)
    .put(authMiddleware.protect,userController.updateUser)
    .delete(authMiddleware.protect, authMiddleware.authorization, userController.deleteUser);

module.exports = router;