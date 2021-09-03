import React from "react";

function CarsTemplate(props) {
  const cars = props.cars;
  return (
    <div className="card col-md-3 m-1">
      <div className="card-body">
        <h5 className="card-title">{cars.make}</h5>
        <h5 className="card-text">{cars.model}</h5>
        <h5 className="card-text">{cars.year}</h5>
      </div>
    </div>
  );
}

export default React.memo(CarsTemplate);
