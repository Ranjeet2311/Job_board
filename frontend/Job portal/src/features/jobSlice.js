import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchjobs, postJobs } from "../api/apiUtils";

const jobs = [
  {
    title: "Backend developer",
    description:
      "With more than 12 years of experience and more than 150 colleagues, Sm…",
    createBy: "David Smith",
    company: "Smith-labs",
    location: "Munich, Germany",
    level: "Junior, Intermediate",
    requirement:
      "Programming of backend / system services in Java programming language …",
    benefits:
      "Working hours from Monday till Friday, 8:00 – 16:00, weekends and holi…",
    createdAt: "2024-09-05T12:49:23.783+00:00",
    updatedAt: "2024-09-05T12:50:31.405+00:00",
  },
  {
    title: "Frontend developer",
    description:
      "With more than 12 years of experience and more than 150 colleagues, Sm…",
    createBy: "David Smith",
    company: "Smith-labs",
    location: "Munich, Germany",
    level: "Junior, Intermediate",
    requirement:
      "Programming of backend / system services in Java programming language …",
    benefits:
      "Working hours from Monday till Friday, 8:00 – 16:00, weekends and holi…",
    createdAt: "2024-09-05T12:49:23.783+00:00",
    updatedAt: "2024-09-05T12:50:31.405+00:00",
  },
];

const initialState = {
  jobs,
  createdMessage: { success: true, message: "" },
};

export const fetchJobs = createAsyncThunk("api/fetchData", async () => {
  return await fetchjobs();
});
export const postData = createAsyncThunk("api/postData", async (newJob) => {
  return await postJobs(newJob);
});

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    /* eslint-disable-line no-unused-vars*/ getAllPosts: (state, action) =>
      console.log(`Get all job Post`),

    addJobPost: (state, action) => {
      const jobData = action.payload;

      if (
        !jobData.title ||
        !jobData.description ||
        !jobData.createBy ||
        !jobData.company ||
        !jobData.location ||
        !jobData.level ||
        !jobData.requirement ||
        !jobData.benefits
      ) {
        return (
          (state.createdMessage.success = false),
          (state.createdMessage.message = "Please add all the fields")
        );
      }
      state.jobs = [...state.jobs, jobData];
    },

    /* eslint-disable-line no-unused-vars*/ updateJobPost: (state, action) =>
      console.log(`update Job Post`),
    /* eslint-disable-line no-unused-vars*/ deleteJobPost: (state, action) =>
      console.log(`delete Job Post`),
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.createdMessage.message = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.createdMessage.message = "succeeded";
        state.createdMessage.success = true;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.createdMessage.message = action.error.message;
        state.createdMessage.success = false;
      })
      .addCase(postData.pending, (state) => {
        state.createdMessage.message = "loading";
      })
      .addCase(postData.fulfilled, (state) => {
        state.createdMessage.message = "succeeded";
        state.createdMessage.success = true;
      })
      .addCase(postData.rejected, (state, action) => {
        state.createdMessage.message = action.error.message;
        state.createdMessage.success = false;
      });
  },
});

export const { getAllPosts, addJobPost, updateJobPost, deleteJobPost } =
  jobSlice.actions;
export default jobSlice.reducer;
