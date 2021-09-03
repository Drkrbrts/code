import React from "react";

const CarCard = (props) => {
  return (
    <div
      className="card col-md-3 col-lg-2 m-1 text-drk bg-secondary border-primary"
      style={{ borderWidth: "3px" }}
    >
      <div className="card-body">
        <h5 className="card-title">{props.car.make}</h5>
        <h5 className="card-text">{props.car.model}</h5>
        <h5 className="card-text">{props.car.year}</h5>
      </div>
    </div>
  );
};

export default CarCard;
