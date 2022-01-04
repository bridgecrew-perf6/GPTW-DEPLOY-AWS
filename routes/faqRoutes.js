const express = require("express");
const { getAllFaqs, createFaq } = require("../controllers/faqController");

const { isAuthenticatedUser, isAdmin } = require("../middleware/auth");
const router = express.Router();

//Get all Faq's
router.route("/faqs").get(isAuthenticatedUser, getAllFaqs);

//Create a Faq
router.route("/admin/faq/new").post(isAuthenticatedUser, isAdmin("isAdmin"), createFaq);

module.exports = router;