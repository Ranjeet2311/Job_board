import { combineSlices } from "@reduxjs/toolkit";
import jobReducer from "../features/jobSlice";
import userReducer from "../features/userSlice";

export const rootReducer = combineSlices({
  // 'jobs' is accessed from othwr files to to contact the slice
  jobs: jobReducer,
  users: userReducer,
});
