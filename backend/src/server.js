import express from "express";
import "dotenv/config";
import authRoutes from "../src/routes/auth.route.js";
import userRoutes from "../src/routes/user.route.js";
import chatRoutes from "../src/routes/chat.route.js";

import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  connectDB();
});
