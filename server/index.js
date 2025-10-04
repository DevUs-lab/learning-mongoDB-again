const express = require('express')
const app = express()

const router = require("./router/auth-router")

app.use("/api/auth", router)

app.get("/register", (req, res) => {
    res.send("this is server Register");
});


const PORT = 9343;

app.listen(PORT, () => {
    console.log('server is running at:', PORT)
})