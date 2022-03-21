const productRouter = require("./product.route");
const userRouter = require("./user.route");

// const authMiddleware = require("../middlewares/authMiddleware");

module.exports = (app) => {
  app.use("/products", productRouter);
  app.use("/users", userRouter);
//   app.use("/api", authMiddleware.protect, userRouter);
};