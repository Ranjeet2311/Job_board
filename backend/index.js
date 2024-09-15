import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import router from "./routes/job.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();
const port = process.env.port || 3000;

const __dirname = path.resolve();

app.use(express.json()); // Allows to accept JSON data in the req.body

app.use("/api/jobs", router);
app.use("/api/user", authRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(port, () => {
  connectDB();
  console.log(`Oh boy server started at http://localhost:${port}/`);
});
