const User = require("../models/user_modle");
// const bcrypt = require("bcrypt")

const register = async (req, res) => {
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
            res.status(400).json("Email is already exist")
            res.status(400).send({ message: "User registered successfully" })
            return
        }

        // Create user — middleware will hash password
        const userCreated = await User.create({ userName, password, email, phone });

        // this will go in frontend and now we are sending message with token
        return res.status(201).json({ message: "User created successfully", token: await userCreated.generateToken(), userId: userCreated._id.toString() });

    } catch (error) {
        console.log('error', error)
        res.status(400).json({ msg: "page not found" })
    }
}

const login = (req, res) => {
    try {
        console.log('req.body', req.body)
        res.status(200).send({ message: `This is the login route 02`, data: req.body });

    } catch (error) {
        res.status(400).send({ msg: `page not found"` })
    }
}

module.exports = { login, register };