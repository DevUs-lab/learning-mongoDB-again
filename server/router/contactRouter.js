const express = require("express");
const { contact } = require("../controllers/contact-controller");
const validate = require("../validation-middleware/middleware");
const contactSchema = require("../validation-middleware/contact-validation");
const { about } = require("../controllers/about-controller");
const router = express.Router();

// router.post("/contact", contact)
// router.route('/contact').post(validate(contactSchema), contact)
router.post('/contact', validate(contactSchema), contact)

module.exports = router