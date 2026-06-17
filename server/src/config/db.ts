import mongoose from "mongoose";
import { config } from "@config";

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(config.mongodbUri);
    console.log(`Database connected successfully at ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error occurred while connecting to db:  ${err}`);
    process.exit(1);
  }
};
