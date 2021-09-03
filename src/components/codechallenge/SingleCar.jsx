import React from "react";


const SingleCar = (props) => {
  console.log(props);
  const oneCar = props.car;

  return (
      <div className="card col-3 text-center justify-content-center m-3">
        <div className="card-body">
          <p className="card-text mb-2 text-muted">{oneCar.make}</p>
          <p className="card-text text-muted">{oneCar.model}</p>
          <p className="card-text text-muted">{oneCar.year}</p>
        </div>
      </div>
  );
};

export default SingleCar;