const express = require("express");
const router = express.Router();
// const { login, register } = require("../controllers/auth-controller")
const controller = require("../controllers/auth-controller")


router.post("/register", controller.register);

router.route("/login").get(controller.login);

module.exports = router;
