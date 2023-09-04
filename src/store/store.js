import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "./uiSlice";
import { cartReducer } from "./cartSlice";
import { authReducer } from "./authSlice";

const store = configureStore({
  reducer: {
    uiState: uiReducer,
    cartState: cartReducer,
    authState: authReducer,
  },
});
export default store;
