const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const db = process.env.MONGO_URI;
        if (!db) {
            throw new Error("MONGO_URI environment variable is not defined.");
        }

        await mongoose.connect(db);
        console.log("MongoDB connected...");
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
        // Graceful shutdown or further error handling logic can be added here
        process.exit(1);
    }
};

module.exports = connectDB;