const Contact = require("../models/contact_model");
const User = require("../models/user_model");
const bcrypt = require("bcrypt")

const register = async (req, res, next) => {
    try {

        const { userName, password, email, phone } = req.body
        console.log('req.body', req.body)

        const userExist = await User.findOne({ email })

        // const saltRounds = 10;

        // const salt = await bcrypt.genSaltSync(saltRounds);
        // const hash = await bcrypt.hashSync(password, salt);

        if (!userName || !password || !email || !phone) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Create user — middleware will hash password
        const userCreated = await User.create({ userName, password, email, phone });

        // this will go in frontend and now we are sending message with token
        return res.status(201).json({ message: "User created successfully", token: await userCreated.generateToken(), userId: userCreated._id.toString() });

    } catch (err) {
        console.log('Detailed error:', err);
        const message = "Internal server error"
        const status = 500
        const extraDetails = err

        const error = {
            message, status, extraDetails
        }
        next(error)
        // res.status(500).json({ msg: "Internal server error", error: error.message });
    }
}

const login = async (req, res) => {
    try {
        console.log('req.body', req.body)

        const { password, email } = req.body

        const userExist = await User.findOne({ email })

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });

        }

        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password)

        if (user) {
            res.status(200).json({
                message: "Login successfully",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
                userName: userExist.userName, // ✅ Add this line
                email: userExist.email
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }


    } catch (err) {
        console.error("Detailed error:", err);

        next({
            message: "Internal server error",
            status: 500,
            extraDetails: err,
        });
    }
}
module.exports = { login, register }