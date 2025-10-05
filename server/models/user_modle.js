const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: {
        type: String
        , required
    },
    email: {
        type: String
        , required
    },
    password: {
        type: String
        , required
    },
    phone: {
        type: String
        , required
    },
    isAdmin: {
        type: Boolean
        , default: false
    },
    userName: {
        type: String
        , required
    },
})