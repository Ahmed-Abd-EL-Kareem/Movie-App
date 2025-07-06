import { ALLMOVIES } from "../Types/MoviesTypes";

const initialState = {
  movies: [],
  pageCount: 0,
};
export const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return { movies: action.data, pageCount: action.pages };

    default:
      return state;
  }
};
