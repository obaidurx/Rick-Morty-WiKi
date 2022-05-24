import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, setPageNumbers, pageNumbers }) => {
  let [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  let updateDimension = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  <style jsx>
    {`
      @media (max-width: 768px) {
        .pagination {
          font-size: 12px;
        }
        .next,
        .prev {
          display: none;
        }
      }
      @media (max-width: 768px) {
        .pagination {
          font-size: 14px;
        }
      }
    `}
  </style>;

  return (
    <ReactPaginate
      className="pagination justify-content-center my-4 gap-4"
      forcePage={pageNumbers === 1 ? 0 : pageNumbers - 1}
      nextLabel="Next "
      previousLabel="Prev"
      nextClassName="btn btn-primary next"
      previousClassName="btn btn-primary prev"
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
