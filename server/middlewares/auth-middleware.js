const jwt = require('jsonwebtoken');
const User = require('../models/user_model');

const authMiddleware = async (req, res, next) => {
    try {
        // 1️⃣ Get token from header
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ msg: "Access denied. No token provided." });
        }

        // 2️⃣ Remove 'Bearer ' prefix and trim spaces
        const jwtToken = token.replace("Bearer", "").trim();

        // 3️⃣ Verify JWT using your secret key
        const verified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        // 4️⃣ Fetch user data from database
        const userData = await User.findOne({ email: verified.email }).select("-password");

        if (!userData) {
            return res.status(404).json({ msg: "User not found." });
        }

        // 5️⃣ Attach to request for next middleware/controller
        req.user = userData;
        req.token = jwtToken;
        req.userID = userData._id;

        next();
    } catch (error) {
        return res.status(401).json({ msg: "Invalid or expired token.", error: error.message });
    }
};

module.exports = authMiddleware;
