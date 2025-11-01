require("dotenv").config()
const error_middlewares = require("./middlewares/error_middlewares")
const cors = require("cors")

const express = require('express')
const app = express()


const authRouter = require("./router/auth-router")
const contactRouter = require("./router/contactRouter")
const aboutRouter = require('./router/aboutRouter')
const connectDb = require('./utils/db')

app.use(express.json())
app.use(cors());
app.use("/api/auth", authRouter)
app.use('/api/form', contactRouter)
app.use('/api/about', aboutRouter)
app.use(error_middlewares)
const PORT = process.env.PORT || 9343;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log('server is running at:', PORT)
    });
});