import mongoose from "mongoose";


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/quotes_management_application"
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("MongoDB connected successfully.")
    } catch (error) {
        console.log("Error connecting MongoDB")
        process.exit(1)
    }
}

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log("MongoDB disconnected successfully")
    } catch (error) {
        console.log("Failed to disconnect MongoDB")
    }
}

export {connectDB, disconnectDB}