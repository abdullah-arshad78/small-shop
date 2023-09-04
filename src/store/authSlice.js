import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authState",
  initialState: { isLoggedIn: false, token: "" },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
