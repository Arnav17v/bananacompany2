import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import blogRotes from "./routes/blogRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/blog", blogRotes);
