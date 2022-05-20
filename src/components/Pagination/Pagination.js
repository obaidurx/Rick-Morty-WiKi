import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, setPageNumbers, pageNumbers }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center my-4 gap-4"
      forcePage={pageNumbers === 1 ? 0 : pageNumbers - 1}
      nextLabel="Next "
      previousLabel="Prev"
      nextClassName="btn btn-outline-dark "
      previousClassName="btn btn-outline-dark"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setPageNumbers(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};
export default Pagination;
