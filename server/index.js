require("dotenv").config()
const error_middlewares = require("./middlewares/error_middlewares")

const express = require('express')
const app = express()

app.use(express.json())

const authRouter = require("./router/auth-router")
const contactRouter = require("./router/contactRouter")
const connectDb = require('./utils/db')

app.use("/api/auth", authRouter)
app.use('/api/form', contactRouter)
app.use(error_middlewares)
const PORT = 9343;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log('server is running at:', PORT)
    });
})