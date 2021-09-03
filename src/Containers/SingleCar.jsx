import React from "react";

function SingleCar(props) {
  const oneCar = props.car;

  return (
    <div key={oneCar.id} className="card col-md-3 m-1">
      <div className="card-body">
        <h5 className="card-title">{oneCar.make}</h5>
        <h5 className="card-text">{oneCar.model}</h5>
        <h5 className="card-text">{oneCar.year}</h5>
      </div>
    </div>
  );
}

export default SingleCar;
