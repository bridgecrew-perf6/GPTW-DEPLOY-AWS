const FAQ = require("../models/faqModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const logger = require("../utils/logger");

//Get all faqs
exports.getAllFaqs = catchAsyncErrors(async (req, res) => {
  const faq = await FAQ.find();
  res.status(201).json({
    success: true,
    faq,
  });
});

//Create faq
exports.createFaq = catchAsyncErrors(async (req, res) => {
  req.body.createdBy = req.user.id;
  const faq = await FAQ.create(req.body);
  res.status(201).json({
    success: true,
    faq,
  });
});

//Update Faq
// exports.updateSpecificFaq
