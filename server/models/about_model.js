const mongoose = require("mongoose")

const aboutSchema = new mongoose.Schema({

})

const About = mongoose.model("About", aboutSchema)

module.exports = { About }