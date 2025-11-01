const express = require("express");
const router = express.Router();
// const { login, register } = require("../controllers/auth-controller")
const controller = require("../controllers/auth-controller");
const validate = require("../validation-middleware/middleware");
const signUpSchema = require("../validators/auth-validation");
const authMiddleware = require('../middlewares/auth-middleware')

router.post("/register", validate(signUpSchema), controller.register);

router.route("/login").post(controller.login);
router.get("/user", authMiddleware, controller.user);

module.exports = router;
