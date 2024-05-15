const express = require("express");

const {
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controller/product_controller");
const { adminMiddleware } = require("../middleware/adminMiddleware");

const productRouter = express.Router();
//adminMiddleware,
productRouter.get("/", getProduct);
productRouter.get("/:id", getSingleProduct);
productRouter.post("/",  postProduct);
productRouter.patch("/:id", adminMiddleware, updateProduct);
productRouter.delete("/:id", adminMiddleware, deleteProduct);

module.exports = { productRouter };
