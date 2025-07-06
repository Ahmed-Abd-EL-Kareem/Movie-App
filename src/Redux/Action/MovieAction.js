import axios from "axios";
import { ALLMOVIES, MovieApi } from "../Types/MoviesTypes";

// export const getAllMovie = () => {
//   return async (dispatch) => {
//     const res = await axios.get(MovieApi);
//     dispatch({
//       type: ALLMOVIES,
//       data: res.data.results,
//       pages: res.data.total_pages,
//     });
//   };
// };
// export const searchMovie = (search) => {
//   return async (dispatch) => {
//     const res = await axios.get(
//       `https://api.themoviedb.org/3/search/movie?api_key=836cae8d9dd8dec1aeab95b8f0ef6610&&query=${search}&language=ar`
//     );
//     dispatch({
//       type: ALLMOVIES,
//       data: res.data.results,
//       pages: res.data.total_pages,
//     });
//   };
// };
// export const pagesCount = (page) => {
//   return async (dispatch) => {
//     const res = await axios.get(
//       `https://api.themoviedb.org/3/movie/popular?api_key=836cae8d9dd8dec1aeab95b8f0ef6610&&language=ar&page=${page}`
//     );
//     dispatch({
//       type: ALLMOVIES,
//       data: res.data.results,
//       pages: res.data.total_pages,
//     });
//   };
// };

export const AllMovie = (url) => {
  return async (dispatch) => {
    const res = await axios.get(url);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
