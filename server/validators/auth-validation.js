const { z } = require("zod");

const signUpSchema = z.object({
    userName: z.string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters." })
        .max(25, { message: "Name must not be more than 25 characters." }),

    email: z.string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" }),

    phone: z.string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be at least 10 digits." })
        .max(15, { message: "Phone must not be more than 15 digits." }),

    password: z.string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters." })
});

module.exports = signUpSchema;