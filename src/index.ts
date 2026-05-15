import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helloRoutes from "./routes/helloRoutes";

dotenv.config();

const app = express();

const PORT: number = Number(process.env.PORT) || 7777;

app.use(express.json());

app.use("/hello", helloRoutes);


mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
