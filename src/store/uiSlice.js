import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiState",
  initialState: {
    showCart: false,
    notification: { status: "", message: "" },
    mobileNavigation: {
      isMobileNavigation: false,
      showMobileNavigation: false,
    },
  },
  reducers: {
    showCart: (state) => {
      state.showCart = true;
    },
    hideCart: (state) => {
      state.showCart = false;
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    changeNotification: (state, action) => {
      state.notification.status = action.payload.status;
      state.notification.message = action.payload.message;
    },
    resetNotification: (state) => {
      state.notification.status = "";
      state.notification.message = "";
    },
    showMobileNavbar: (state) => {
      state.mobileNavigation.isMobileNavigation = true;
    },
    hideMobileNavbar: (state) => {
      state.mobileNavigation.isMobileNavigation = false;
    },
    toggleMobileNavigation: (state) => {
      state.mobileNavigation.showMobileNavigation =
        !state.mobileNavigation.showMobileNavigation;
    },
    hideMobileNavigation: (state) => {
      state.mobileNavigation.showMobileNavigation = false;
    },
  },
});
export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
