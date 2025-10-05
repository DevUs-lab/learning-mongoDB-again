const register = (req, res) => {
    try {
        res.send("This is the register route");
    } catch (error) {
        res.status(400).send({ msg: "page not found" })

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