const ALLMOVIES = "ALLMOVIES";

const MovieApi =
  "https://api.themoviedb.org/3/movie/popular?api_key=836cae8d9dd8dec1aeab95b8f0ef6610&&language=ar";

const SearchMovie = (search) =>
  `https://api.themoviedb.org/3/search/movie?api_key=836cae8d9dd8dec1aeab95b8f0ef6610&&query=${search}&language=ar`;
const CountPages = (page) =>
  `https://api.themoviedb.org/3/movie/popular?api_key=836cae8d9dd8dec1aeab95b8f0ef6610&&language=ar&page=${page}`;

export { ALLMOVIES, MovieApi, CountPages, SearchMovie };
