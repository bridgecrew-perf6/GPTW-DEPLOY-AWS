const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Please provide a question"],
      unique: true,
    },
    answer: {
      type: String,
      required: [true, "Please enter answer"],
    },
    category: {
      type: String,
      required: [true, "Please enter question category"],
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FAQ", faqSchema);
