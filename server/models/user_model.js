const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
})

userSchema.methods.generateToken = function () {
    try {
        return jwt.sign(
            {
                userId: this._id,
                email: this.email,
                isAdmin: this.isAdmin
            },
            process.env.JWT_SECRIT_KEY,
            {
                expiresIn: "2h"
            }
        )
    } catch (error) {
        console.error('error', error)

    }
}

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
}

userSchema.pre("save", async function (next) {
    let user = this
    console.log('this (middleware)', this)
    if (!user.isModified("password")) {
        return next()
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