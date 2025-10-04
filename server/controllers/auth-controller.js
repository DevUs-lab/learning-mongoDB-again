const express = require("express")

const register = (req, res) => {
    try {
        res.send("This is the register route");

    } catch (error) {
        res.status(400).send({ msg: "page not found" })

    }
}

const login = (req, res) => {
    try {
        res.send("This is the login route 02");
    } catch (error) {
        res.status(400).send({ msg: "page not found" })

    }
}

module.exports = { login, register };