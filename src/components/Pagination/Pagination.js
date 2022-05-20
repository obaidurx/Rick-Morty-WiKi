import React from "react";

const Pagination = ({ setPageNumbers, pageNumbers }) => {
  let next = () => {
    setPageNumbers((x) => x + 1); //initial x value is 'useState(1)' value
  };
  let prev = () => {
    if (pageNumbers === 1) return;
    setPageNumbers((x) => x - 1); //initial x value is 'useState(1)' value
  };

  return (
    <div>
      <div className="container d-flex justify-content-center gap-5 my-5">
        <button onClick={prev} className="btn btn-primary">
          Prev
        </button>
        <button onClick={next} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};
export default Pagination;
