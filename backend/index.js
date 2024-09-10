import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/job.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();
app.use(express.json()); // Allows to accept JSON data in the req.body

app.use("/api/jobs", router);
app.use("/api/user", authRouter);

const port = process.env.port || 3000;
app.listen(port, () => {
  connectDB();
  console.log(`Oh boy server started at http://localhost:${port}/`);
});
