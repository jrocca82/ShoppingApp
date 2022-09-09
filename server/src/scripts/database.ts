import mongoose from "mongoose";

export default async () => {
  if (!process.env.MONGODB_URI)
    throw new Error("Missing MongoDB URI in .env file");

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};

// Start and return a session to support things such as transactions
export const startSession = async () => mongoose.startSession();