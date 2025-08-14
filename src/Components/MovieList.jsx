import React, { useEffect, useState } from "react";
import CardMovie from "./CardMovie";
import { Row } from "react-bootstrap";
import Paginations from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { AllMovie } from "../Redux/Action/MovieAction";
import { MovieApi } from "../Redux/Types/MoviesTypes";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllMovie(MovieApi));
  }, [dispatch]);

  const dataMovies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <Row style={{}} className="mt-3">
      {(movies.length &&
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })) || <h2 className="text-center p-5">لا يوجد افلام ......</h2>}
      {(movies.length && <Paginations />) || ""}
    </Row>
  );
};

export default MovieList;
