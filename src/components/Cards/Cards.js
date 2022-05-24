import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.modules.scss";
const Cards = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { name, id, image, location, status } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-4 mb-4 position-relative text-dark"
        >
          <div className={`cards`}>
            <img src={image} alt="" className={`img img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div className={`badge position-absolute badge bg-danger`}>
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className={`badge position-absolute badge bg-success`}>
                  {status}
                </div>
              );
            } else {
              return (
                <div className={`badge position-absolute badge bg-secondary`}>
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No Character is Found:/";
  }
  return <>{display}</>;
};

export default Cards;
