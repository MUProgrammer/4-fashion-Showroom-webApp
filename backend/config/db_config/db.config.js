import express from "express";
import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database Connected Successfully : ✅`);
  } catch (error) {
    console.log(`Connection Error : ❌ ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;