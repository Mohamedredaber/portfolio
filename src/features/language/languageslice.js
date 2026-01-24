import { createSlice } from "@reduxjs/toolkit";

const savedLanguage = localStorage.getItem("lang") || "en";

const initialState = {
  langue: savedLanguage,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    updateLanguage: (state, action) => {
      state.langue = action.payload;
      localStorage.setItem("lang", action.payload);

      document.documentElement.lang = action.payload;
      document.documentElement.dir = action.payload === "ar" ? "rtl" : "ltr";
    },
  },
});

export const { updateLanguage } = languageSlice.actions;
export default languageSlice.reducer;
