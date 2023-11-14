import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./features/cart/data.slice";

export const store = configureStore({
  reducer: {
    data: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
