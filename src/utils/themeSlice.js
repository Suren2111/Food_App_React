
import { createSlice } from "@reduxjs/toolkit";

const initialTheme = localStorage.getItem('theme') || 'light';

const themeSlice = createSlice({
  name: "theme", 
  initialState: {
    theme: initialTheme, 
  },
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { updateTheme } = themeSlice.actions;
export default themeSlice.reducer;
