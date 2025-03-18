import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`The Database is connected on -----> ${process.env.MONGO_URI}`);
    } catch (err) {
        console.log(err);
    }
}