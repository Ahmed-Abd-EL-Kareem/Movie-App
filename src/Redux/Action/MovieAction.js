import axios from "axios";
import { ALLMOVIES, MovieApi } from "../Types/MoviesTypes";

export const AllMovie = (url) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(url);
      dispatch({
        type: ALLMOVIES,
        data: res.data.results,
        pages: res.data.total_pages,
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
};
