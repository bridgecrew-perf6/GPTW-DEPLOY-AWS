const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a product name"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please enter a product description"],
    },
    imgUrl: {
      type: String,
      required: [true, "Please enter a product image"],
    },
    price: {
      type: Number,
      maxlength: [8, "Price cannot exceed 8 characters"],
    },
    price_per_month: {
      type: Number,
      required: [true, "Please enter a price"],
      maxlength: [8, "Price cannot exceed 8 characters"],
    },
    productUrl: {
      type: String,
      required: [true, "Please enter a product URL"],
    },
    productFor: {
      type: Array,
      required: [true, "Please enter who should see these products"],
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
