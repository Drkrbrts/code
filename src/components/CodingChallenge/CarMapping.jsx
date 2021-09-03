import React from "react";

function CarMapping(props) {
  const carData = props.car;

  return (
    <div className="card col-md-3 m-1">
      <div className="card-body">
        <h5 className="card-title">{carData.make}</h5>
        <p className="card-text">{carData.model}</p>
        <p className="card-text">{carData.year}</p>
      </div>
    </div>
  );
}

export default CarMapping;
