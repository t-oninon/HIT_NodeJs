const productsController = require("../controllers/product.controller");

const router = require("express").Router();

router.route("/")
    .get(productsController.getAllProduct)
    .post(productsController.creatProduct)

router.route("/:id")
    .get(productsController.getProduct)
    .put(productsController.updateProduct)
    .delete(productsController.deleteProduct)

module.exports = router;
