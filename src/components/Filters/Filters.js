import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setSpecies, setStatus, setPageNumbers, setGender }) => {
  let clear = () => {
    setSpecies("");
    setStatus("");
    setPageNumbers("");
    setGender("");
    window.location.reload(false);

    /* .reload(false) it mean it just reload the catch file not entire page from the server.
    if you use reload(true) then it reload the entire page from the server . */
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-2 mb-4">Filter</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-decoration-underline text-primary mb-4"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumbers={setPageNumbers} setStatus={setStatus} />
        <Species setSpecies={setSpecies} setPageNumbers={setPageNumbers} />
        <Gender setGender={setGender} setPageNumbers={setPageNumbers} />
      </div>
    </div>
  );
};

export default Filters;
