import React from "react";

const SingleCar = (props) => {
  const car = props.car;

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{car.make}</h5>
        <h5 className="card-text">{car.model}</h5>
        <h5 className="card-text">{car.year}</h5>
      </div>
    </div>
  );
};

export default SingleCar;
