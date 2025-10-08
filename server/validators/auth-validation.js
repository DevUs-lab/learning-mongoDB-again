const { z } = require("zod");

// const signUpSchema = z.object({
//     userName: z
//         .string({ required_error: "Name is required" })
//         .trim()
//         .min(3, { message: "Name must be at least 3 characters." })
//         .max(25, { message: "Name must not be more than 25 characters." }),

//     email: z
//         .string({ required_error: "Email is required" })
//         .trim()
//         .email({ message: "Invalid email address." }),

//     phone: z
//         .string({ required_error: "Phone number is required" })
//         .trim()
//         .min(10, { message: "Phone number must be at least 10 digits." })
//         .max(15, { message: "Phone number must not exceed 15 digits." }),

//     password: z
//         .string({ required_error: "Password is required" })
//         .trim()
//         .min(6, { message: "Password must be at least 6 characters." })
//         .max(25, { message: "Password must not exceed 25 characters." }),
// });

// module.exports = signUpSchema;


const signUpSchema = z.object({
    userName: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters." })
        .max(25, { message: "Name must not be more than 25 characters." })
        .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .toLowerCase(),

    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .regex(/^\+?[\d\s\-()]+$/, { message: "Invalid phone number format" })
        .min(10, { message: "Phone must be at least 10 digits." })
        .max(15, { message: "Phone must not be more than 15 digits." }),

    password: z
        .string({ required_error: "Password is required" })
        .min(8, { message: "Password must be at least 8 characters." })
        .max(100, { message: "Password must not be more than 100 characters." })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
            message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        })
});


module.exports = signUpSchema