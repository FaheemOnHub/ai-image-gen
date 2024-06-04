import mongoose from "mongoose";
import dotenv from "dotenv";
import PORT from "../index.js";
dotenv.config();
const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected😃"))
    .then(() => console.log(`Server is running on port ${PORT}`))
    .catch((err) => console.log(err));
};

export default connectDB;
