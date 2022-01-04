const express = require("express");
const {
  getAllProducts,
  getSpecificProduct,
  updateSpecificProduct,
  deleteSpecificProduct,
  createProduct,
} = require("../controllers/productController");
const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = express.Router();

// GET ALL PRODUCTS
router.route("/products").get(isAuthenticatedUser, getAllProducts);

// CREATE A PRODUCT
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, isAdmin("isAdmin"), createProduct);

// GET SPECIFIC PRODUCT
router
  .route("/admin/product/:id")
  .get(getSpecificProduct)
  .put(isAuthenticatedUser, isAdmin("isAdmin"), updateSpecificProduct)
  .delete(isAuthenticatedUser, isAdmin("isAdmin"), deleteSpecificProduct);

module.exports = router;
