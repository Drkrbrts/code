import React from "react";

const SingleCar = (props) => {
  return (
    <div className="card col-md-3 m-1">
      <div className="card-body">
        <h5 className="card-title">{props.singleCar.make}</h5>
        <h5 className="card-text">{props.singleCar.model}</h5>
        <h5 className="card-text">{props.singleCar.year}</h5>
      </div>
    </div>
  );
};

export default SingleCar;
