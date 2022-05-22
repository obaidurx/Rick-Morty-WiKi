import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setSpecies, setStatus, setPageNumbers, setGender }) => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div
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
