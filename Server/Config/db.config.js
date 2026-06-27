import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("DB Connected Successfully"));
  } catch (error) {
    process.exit(1);
    console.log("ERR! While connecting to the DB", error);
  }
};
