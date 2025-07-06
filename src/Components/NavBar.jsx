import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "./logo.png";
import { useDispatch } from "react-redux";
import { AllMovie } from "../Redux/Action/MovieAction";
import { MovieApi, SearchMovie } from "../Redux/Types/MoviesTypes";
const NavBar = () => {
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  const Search = async (search) => {
    if (search === "") {
      dispatch(AllMovie(MovieApi));
    } else {
      dispatch(AllMovie(SearchMovie(search)));
    }
  };
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="logo.png" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search w-100">
              <i className="fa-solid fa-magnifying-glass icon"></i>
              <input
                value={searchData}
                onChange={(e) => {
                  setSearchData(e.target.value);
                  Search(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
