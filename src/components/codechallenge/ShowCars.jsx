import React from "react";

function ShowCars(props) {
  const oneCar = props.car;
  return (
    <div className="card col-md-3 m-1">
      <div className="card-body">
        <h5 className="card-title">{oneCar.make}Make</h5>
        <h5 className="card-text">{oneCar.model}Model</h5>
        <h5 className="card-text">{oneCar.year}Year</h5>
      </div>
    </div>
  );
}

export default ShowCars;
