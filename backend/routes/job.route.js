import express from "express";
import {
  getAJobs,
  createJobs,
  deleteJobs,
  updateJobs,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAJobs);

router.post("/", createJobs);

router.delete("/:id", deleteJobs);

router.patch("/:id", updateJobs);

export default router;
