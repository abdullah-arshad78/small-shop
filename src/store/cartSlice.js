import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartState",
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload.id;
      const existingItem = state.items.find((item) => item.id === itemId);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        existingItem.quantity = existingItem.quantity - 1;
      }
    },
    resetCart: (state) => {
      state.items = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
