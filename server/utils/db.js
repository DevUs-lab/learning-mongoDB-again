const mongoose = require("mongoose");

const URL = "umair:Password123@ac-ljmv7dt-shard-00-00.7srbsxb.mongodb.net:27017,ac-ljmv7dt-shard-00-01.7srbsxb.mongodb.net:27017,ac-ljmv7dt-shard-00-02.7srbsxb.mongodb.net:27017/linux?replicaSet=atlas-rfmvi5-shard-0&ssl=true&authSource=admin";

// mongoose.connect(URL)

const connectDb = async () => {
    try {
        await mongoose.connect(URL)
        console.log("Data base contected successfuly")
    } catch (error) {
        console.log('Data base contection faild', error)
        process.exit(0)
    };
};

module.exports = connectDb;