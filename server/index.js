import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./mongodb/connect.js";
import postRouter from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRouter);
app.use("/api/v1/dalle", dalleRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
  next();
});
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error + "😇");
  }
};
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  await startServer();
});
export default PORT;
