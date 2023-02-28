import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import tripRoutes from "./routes/tripRoutes.js";
import preferencesRoutes from "./routes/preferencesRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api", userRoutes);
app.use("/api", tripRoutes);
app.use("/api", preferencesRoutes);

app.listen(5000, (req, res) => {
  console.log("server running");
});
