import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "../api/apiUtils";

const initialState = {
  user: null,
  token: null,
  error: null,
  isLoggedIn: false,
  loading: false,
  signup: null,
  success: false,
};

export const login = createAsyncThunk(
  "/api/user/login",
  async (logInData, { rejectWithValue }) => {
    try {
      const response = await userLogin(logInData);
      localStorage.setItem("accessToken", response.token);
      return response;
    } catch (error) {
      console.log(`Login slice failed :`, error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  "/api/user/register",
  async (newUser, { rejectWithValue }) => {
    try {
      return await userRegister(newUser);
    } catch (error) {
      console.log(`Signup slice failed :`, error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("accessToken");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        // console.log("State login slice pending");
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user.foundUser;
        state.token = action.payload.token;
        state.error = null;
        state.success = true;
        // console.log("State login slice fulfilled");
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
        // console.log("State login slice rejected action:", action);
        // console.log("State login slice rejected:", action.payload);
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        console.log("State register slice pending");
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.signup = true;
        state.user = action.payload;
        state.token = action.payload.token;
        state.error = null;
        state.success = true;
        // console.log("State register slice fulfilled");
        // console.log("State register slice fulfilled : ", state.user);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
        // console.log("State register slice rejected action:", action);
        // console.log("State register slice rejected:", action.payload);
      });
  },
});

export const { logout, setUser } = userSlice.actions;

export default userSlice.reducer;
