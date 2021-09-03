import React from "react";

const CarsSingle = ({ car }) => {
  return (
    <div
      className="card col-md-3 m-3 bg-light shadow"
      style={{ width: "13rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">Make: {car.make}</h5>
        <h5 className="card-text">Model: {car.model}</h5>
        <h5 className="card-text">Year: {car.year}</h5>
      </div>
    </div>
  );
};
export default React.memo(CarsSingle);
