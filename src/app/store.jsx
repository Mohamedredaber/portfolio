import { configureStore } from "@reduxjs/toolkit";
import languageReducer from '../features/language/languageslice'
export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});
