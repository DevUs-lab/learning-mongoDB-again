// router/about-router.js
const express = require("express");
const { about } = require("../controllers/about-controller");
const router = express.Router();

router.get('/', about);

// You can add more about-related routes later
router.get('/team', (req, res) => {
    res.status(200).json({
        message: "Our Team",
        team: [
            { name: "John Doe", role: "Backend Developer" },
            { name: "Jane Smith", role: "Frontend Developer" }
        ]
    });
});

router.get('/features', (req, res) => {
    res.status(200).json({
        features: [
            "User Registration & Login",
            "JWT Authentication",
            "Contact Form Submission",
            "Data Validation",
            "Error Handling"
        ]
    });
});

module.exports = router;