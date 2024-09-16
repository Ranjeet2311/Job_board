import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteJobs, fetchjobs, postJobs, updateJobs } from "../api/apiUtils";

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
  error: null,
  pending: false,
  success: false,
  jobLength: null,
};

export const fetchJobs = createAsyncThunk("api/fetchData", async () => {
  try {
    return await fetchjobs();
  } catch (error) {
    console.log(`fetchJobs slice failed :`, error.message);
    return error.message;
  }
});
export const postData = createAsyncThunk(
  "api/postData",
  async (newJob, { rejectWithValue }) => {
    try {
      const data = await postJobs(newJob);
      console.log(`data :: `, data);

      return data;
    } catch (error) {
      console.log(`postData slice failed :`, error.message);
      return rejectWithValue(error.message);
    }
  }
);
export const deleteData = createAsyncThunk(
  "api/postData/{id}",
  async (id, { rejectWithValue }) => {
    try {
      return await deleteJobs(id);
    } catch (error) {
      console.log(`Delete slice failed :`, error.message);
      return rejectWithValue(error.message);
    }
  }
);
export const updateData = createAsyncThunk(
  "api/postData/update/{id}",
  async ({ id, updateData }, { rejectWithValue }) => {
    try {
      return await updateJobs(id, updateData);
    } catch (error) {
      console.log(`Delete slice failed :`, error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    hideToast: (state) => {
      state.success = false;
      console.log(`Hide toast clicked`);
    },

    removeDeletedJob: (state, action) => {
      console.log(`removeDeletedJob clicked, `);
      const filterdData = [...state.jobs].filter((item) => {
        console.log(`action.payload : `, action.payload);
        console.log(` item.userId : `, item.title);

        item.title !== action.payload;
      });

      console.log(`filterdData :: `, filterdData);
    },

    sortByAlphabeticalOrderAToZ: (state) => {
      const sorted = [...state.jobs].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      return {
        ...state,
        jobs: sorted,
      };
    },
    sortByAlphabeticalOrderZToA: (state) => {
      const sorted = [...state.jobs].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      return {
        ...state,
        jobs: sorted,
      };
    },
    sortByTimestamp: (state) => {
      const sorted = [...state.jobs].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return {
        ...state,
        jobs: sorted,
      };
    },

    // /* eslint-disable-line no-unused-vars*/ getAllPosts: (state, action) =>
    //   console.log(`Get all job Post`),
    // addJobPost: (state, action) => {
    //   const jobData = action.payload;
    //   if (
    //     !jobData.title ||
    //     !jobData.description ||
    //     !jobData.createBy ||
    //     !jobData.company ||
    //     !jobData.location ||
    //     !jobData.level ||
    //     !jobData.requirement ||
    //     !jobData.benefits
    //   ) {
    //     return (
    //       (state.createdMessage.success = false),
    //       (state.createdMessage.message = "Please add all the fields")
    //     );
    //   }
    //   state.jobs = [...state.jobs, jobData];
    // },
    // /* eslint-disable-line no-unused-vars*/ updateJobPost: (state, action) =>
    //   console.log(`update Job Post`),
    // /* eslint-disable-line no-unused-vars*/ deleteJobPost: (state, action) =>
    //   console.log(`delete Job Post`),
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.pending = true;
        state.error = null;
        console.log(`Pending postData state.pending :: `, state.pending);
        console.log(`Pending postData state.error :: `, state.error);
        console.log(`Pending postData`);
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.pending = false;
        state.success = true;
        state.jobs = action.payload;
        state.jobLength = state.jobs.length;
        console.log(`fulfilled postData state.pending :: `, state.pending);
        console.log(`fulfilled postData state.error :: `, state.error);
        console.log(`fulfilled postData state.success :: `, state.success);
        console.log(`fulfilled postData`);
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
        console.log(`rejected postData state.pending :: `, state.pending);
        console.log(`rejected postData state.error :: `, state.error);
        console.log(`rejected postData`);
      })
      .addCase(postData.pending, (state) => {
        state.pending = true;
        state.error = null;
        state.success = false;
        console.log(`Pending postData state.pending :: `, state.pending);
        console.log(`Pending postData state.error :: `, state.error);
        console.log(`Pending postData`);
      })
      .addCase(postData.fulfilled, (state) => {
        state.pending = false;
        state.success = true;
        console.log(`fulfilled postData state.pending :: `, state.pending);
        console.log(`fulfilled postData state.error :: `, state.error);
        console.log(`fulfilled postData state.success :: `, state.success);
        console.log(`fulfilled postData`);
      })
      .addCase(postData.rejected, (state, action) => {
        state.pending = false;
        state.success = false;
        state.error = action.payload;
        console.log(`rejected postData state.pending :: `, state.pending);
        console.log(`rejected postData state.error :: `, state.error);
        console.log(`rejected postData`);
      })
      .addCase(deleteData.pending, (state) => {
        state.pending = true;
        state.error = null;
        state.success = false;
        console.log(`Pending deleteData state.pending :: `, state.pending);
        console.log(`Pending deleteData state.error :: `, state.error);
        console.log(`Pending deleteData`);
      })
      .addCase(deleteData.fulfilled, (state) => {
        state.pending = false;
        state.success = true;
        console.log(`fulfilled deleteData state.pending :: `, state.pending);
        console.log(`fulfilled deleteData state.error :: `, state.error);
        console.log(`fulfilled deleteData state.success :: `, state.success);
        console.log(`fulfilled postData`);
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.pending = false;
        state.success = false;
        state.error = action.payload;
        console.log(`rejected deleteData state.pending :: `, state.pending);
        console.log(`rejected deleteData state.error :: `, state.error);
        console.log(`rejected postData`);
      })
      .addCase(updateData.pending, (state) => {
        state.pending = true;
        state.error = null;
        state.success = false;
        console.log(`Pending updateData state.pending :: `, state.pending);
        console.log(`Pending updateData state.error :: `, state.error);
        console.log(`Pending updateData`);
      })
      .addCase(updateData.fulfilled, (state) => {
        state.pending = false;
        state.success = true;
        console.log(`fulfilled updateData state.pending :: `, state.pending);
        console.log(`fulfilled updateData state.error :: `, state.error);
        console.log(`fulfilled updateData state.success :: `, state.success);
        console.log(`fulfilled postData`);
      })
      .addCase(updateData.rejected, (state, action) => {
        state.pending = false;
        state.success = false;
        state.error = action.payload;
        console.log(`rejected updateData state.pending :: `, state.pending);
        console.log(`rejected updateData state.error :: `, state.error);
        console.log(`rejected updateData`);
      });
  },
});

export const {
  hideToast,
  sortByAlphabeticalOrderAToZ,
  sortByAlphabeticalOrderZToA,
  sortByTimestamp,
  removeDeletedJob,
} = jobSlice.actions;
export default jobSlice.reducer;
