const mongoose = require("mongoose");


const URL = process.env.MONGODB_URL
const connectDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Database connected successfully");
    } catch (err) {
        console.log("Database connection failed", err);
        process.exit(0);
    }
};

module.exports = connectDb;
