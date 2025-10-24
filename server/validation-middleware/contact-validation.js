const { z } = require("zod");

const contactSchema = z.object({
    name: z.string({ required_error: "Name is required" }).min(3, "Name must be at least 3 characters."),
    email: z.string({ required_error: "Email is required" }).email("Invalid email address."),
    message: z.string({ required_error: "Message is required" }).min(5, "Message must be at least 5 characters."),
});

module.exports = contactSchema;
