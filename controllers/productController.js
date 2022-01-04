const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const logger = require("../utils/logger");

// GET ALL PRODUCTS ADMIN
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const product = await Product.find();
  res.status(201).json({
    success: true,
    product,
  });
});

// CREATE PRODUCT ADMIN
exports.createProduct = catchAsyncErrors(async (req, res) => {
  req.body.createdBy = req.user.id;
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// GET SPECIFIC PRODUCT ADMIN
exports.getSpecificProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    logger.error(`product not found with id:${req.params.id}`);
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(201).json({
    success: true,
    product,
  });
});

// UPDATE SPECIFIC PRODUCT ADMIN
exports.updateSpecificProduct = catchAsyncErrors(async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    logger.error(`product not found with id:${req.params.id}`);
    return next(new ErrorHandler("Product not found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(201).json({
    success: true,
    product,
  });
});

// DELETE SPECIFIC PRODUCT ADMIN
exports.deleteSpecificProduct = catchAsyncErrors(async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    logger.error(`product not found with id:${req.params.id}`);
    return next(new ErrorHandler("Product not found", 404));
  }

  await product.remove();

  res.status(201).json({
    success: true,
    message: "Product deleted successfully",
  });
});
