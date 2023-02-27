import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import postsRoutes from "./routes/postsRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api", userRoutes);
app.use("/api", postsRoutes);

app.get("/", (req, res) => {
  res.send("home route");
});

app.listen(5000, (req, res) => {
  console.log("server running");
});
