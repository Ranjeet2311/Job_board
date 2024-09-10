import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createBy: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    requirement: {
      type: String,
      required: true,
    },
    benefits: {
      type: String,
      required: true,
    },
  },
  { timestamps: true /*created at | Updated at */ }
);

// Model or collections
// mongoose will create 'Job' to 'jobs as a collection'
const Job = mongoose.model("Job", jobSchema);

export default Job;
