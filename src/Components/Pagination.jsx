import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { AllMovie } from "../Redux/Action/MovieAction";
import { CountPages } from "../Redux/Types/MoviesTypes";
const Paginations = () => {
  const [countPage, setCountPage] = useState(0);

  const pages = useSelector((state) => state.pageCount);
  const dispatch = useDispatch();
  useEffect(() => {
    setCountPage(pages);
  }, [pages]);

  const handlePageClick = (data) => {
    dispatch(AllMovie(CountPages(data.selected + 1)));
  };
  const pageCount = countPage;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالى"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3 "}
      pageClassName={"page-item bg-color"}
      previousClassName={"page-item bg-color"}
      nextClassName={"page-item bg-color"}
      breakClassName={"page-item bg-color"}
      breakLinkClassName={"page-link bg-color"}
      pageLinkClassName={"page-link bg-color"}
      previousLinkClassName={"page-link bg-color"}
      nextLinkClassName={"page-link bg-color"}
      activeClassName={"bg-color"}
    />
  );
};

export default Paginations;
