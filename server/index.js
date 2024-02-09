import express from "express";
import authRouter from "./routes/auth.js";
import dotenv from "dotenv";
import connectDB from "./config/mongoose.js";
import cors from "cors";
import gptRouter from "./routes/gpt.js";

const app = express();

dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/api/v1", authRouter);
app.use("/api/v1/gpt", gptRouter);

connectDB();

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is listening to ${port}`);
});
