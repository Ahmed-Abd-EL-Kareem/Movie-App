const ALLMOVIES = "ALLMOVIES";

const API_KEY =
  process.env.REACT_APP_TMDB_API_KEY || "836cae8d9dd8dec1aeab95b8f0ef6610";
const BASE_URL =
  process.env.REACT_APP_TMDB_BASE_URL || "https://api.themoviedb.org/3";

const MovieApi = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ar`;

const SearchMovie = (search) =>
  `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}&language=ar`;

const CountPages = (page) =>
  `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ar&page=${page}`;

export { ALLMOVIES, MovieApi, CountPages, SearchMovie };
