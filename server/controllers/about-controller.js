const about = async (req, res) => {
    try {
        const aboutData = {
            message: "About Our Application",
            version: "1.0.0",
            description: "A comprehensive contact management and authentication API built with Node.js, Express, and MongoDB",
            features: [
                "User Authentication",
                "Contact Form Management",
                "Data Validation",
                "Error Handling"
            ],
            technologies: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "JWT",
                "bcrypt",
                "Zod Validation"
            ],
            author: "Umair Saeed",
            contact: "umairdevus@gmail.com"
        };

        res.status(200).json(aboutData);
    } catch (error) {
        console.error("About controller error:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

module.exports = { about };