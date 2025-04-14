import { configureStore } from '@reduxjs/toolkit';
import Cartreducer from "./cartSlice"

const appStore = configureStore({
  reducer: {
    cart: Cartreducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables serializability check
    }),
});

export default appStore;
