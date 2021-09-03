import React from "react";

const MapCar = (props) => {
  console.log("mapcar", props);
  return (
    // <React.Fragment key={`Cars-${props.id}`}>
    <div className="card col-md-3 m-1">
      <div className="card-body">
        <h5 className="card-title">Make: {props.make}</h5>
        <h5 className="card-text">Model: {props.model}</h5>
        <h5 className="card-text">Year: {props.year}</h5>
      </div>
    </div>
  );
};

export default MapCar;
