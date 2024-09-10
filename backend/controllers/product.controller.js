import mongoose from "mongoose";
import Job from "../models/product.model.js";

export const getAJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.status(200).json({
      success: true,
      message: "data fetch successful",
      data: jobs,
    });
  } catch (error) {
    console.log("Error in fetching data", error.message);
    res
      .status(500)
      .json({ success: false, message: "Couldn't fetch jobs data" });
  }
};

export const createJobs = async (req, res) => {
  const job = req.body;

  if (
    !job.title ||
    !job.description ||
    !job.createBy ||
    !job.company ||
    !job.location ||
    !job.level ||
    !job.requirement ||
    !job.benefits
  ) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all all the details" });
  }

  const newJob = new Job(job); /*check later on with 'product' */

  try {
    await newJob.save();
    res.status(201).json({ success: true, data: newJob });
  } catch (error) {
    console.log("Error in creating a post", error.message);
    res
      .status(500)
      .json({ success: false, message: "Couldn't add, server error" });
  }
};

export const deleteJobs = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "couln't find the desired job post" });
  }

  try {
    await Job.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "successfully deleted selected job" });
  } catch (error) {
    console.log("Error in deleting selected job", error.message);
    res
      .status(500)
      .json({ success: false, message: "Couldn't find the requested post" });

    console.log("Error is deleting job", error.message);
  }
};

export const updateJobs = async (req, res) => {
  const { id } = req.params;
  const job = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "couln't find the desired job post" });
  }

  try {
    const updatedJob = await Job.findByIdAndUpdate(id, job, { new: true });
    res
      .status(200)
      .json({ success: true, message: "Update successful", data: updatedJob });
  } catch (error) {
    console.log("Erro in updating job post", error.message);
    res.status(500).json({
      success: false,
      message: "Couldn't update the selected job post",
    });
  }
};
