import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const par = useParams();

  const API_KEY =
    process.env.REACT_APP_TMDB_API_KEY || "836cae8d9dd8dec1aeab95b8f0ef6610";

  const getMovie = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${par.id}?api_key=${API_KEY}&language=ar`
      );
      setDataMovie(res.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [par.id]);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-detalis d-flex align-items-center">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500${dataMovie.poster_path}`}
              alt="#"
            />
            <div className="justify-content-center text-center mx-auto">
              <p className="card-text-details border-bottom">
                اسم الفيلم : {dataMovie.original_title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم : {dataMovie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين : {dataMovie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم : {dataMovie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" Xs="12" sm="12" className="mt-1 ">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom">القصة</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{dataMovie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col
          md="10"
          XS="12"
          sm="12"
          className="mt-5 mb-2 d-flex justify-content-center"
        >
          <Link to={"/"}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              عوده للرئيسيه
            </button>
          </Link>
          <a href={dataMovie.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              مشاهده الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
