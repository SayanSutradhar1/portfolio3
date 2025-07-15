import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

export default async function connectDB() {
  if (connection.isConnected) {
    console.log("Already connected to mongodb");
    return;
  }
  try {
    const response = await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: process.env.DB_NAME,
    });

    connection.isConnected = response.connection.readyState;
    console.log("Mongodb connected");
  } catch (error) {
    console.log("Failed to connect with database", (error as Error).message);
  }
}
