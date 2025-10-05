require("dotenv").config()

const express = require('express')
const app = express()

app.use(express.json())

const router = require("./router/auth-router")
const connectDb = require('./utils/db')

app.use("/api/auth", router)

const PORT = 9343;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log('server is running at:', PORT)
    });
})