import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDB = async () => {
  console.log("URI:", process.env.MONGODB_URI)
  console.log("DB:", DB_NAME)
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection Error", error);
    process.exit(1);
  }
};

export default connectDB