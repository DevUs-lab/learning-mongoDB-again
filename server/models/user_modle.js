const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
})

userSchema.pre("save", async function (next) {
    let user = this
    console.log('this (middleware)', this)
    if (!user.isModified("password")) {
        next()
    }

    try {

        const salt = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(user.password, salt)
        user.password = hash_password

    } catch (error) {
        next(error)

    }

})

const User = mongoose.model("User", userSchema)
module.exports = User