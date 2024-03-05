import mongoose from "mongoose";

export const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB database connected.")
    }
    catch (error) {
        console.log("Error while connecting to MongoDB. ", error);
        process.exit(1);
    }
}