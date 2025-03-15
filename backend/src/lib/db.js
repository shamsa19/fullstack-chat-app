import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

export const connectDB = async () => {
    try {
      const conn= await mongoose.connect(process.env.MONGODB_URI); 
        console.log(` MongoDB Connected Successfully`);
    } catch (error) {
        console.error(` MongoDB Connection Failed: ${error.message}`);
        process.exit(1);
    }
};
