const Contact = require("../models/contact_model");

const contact = async (req, res, next) => {
    try {

        const formData = req.body
        const newContact = await Contact.create(formData)

        res.status(201).json({ message: "Message received successfully!", data: newContact });
    } catch (err) {
        console.error("Detailed error:", err);

        next({
            message: "Internal server error",
            status: 500,
            extraDetails: err,
        });
    }

}




module.exports = { contact };
