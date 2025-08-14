import { configureStore } from "@reduxjs/toolkit";
import { MoviesReducer } from "../Reducer/MovieReducer";

export const store = configureStore({
  reducer: {
    movies: MoviesReducer,
  },
});
