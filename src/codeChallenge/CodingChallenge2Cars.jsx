import React from "react";

function SingleCar(props) {
  const carInfo = props.carInfo;
  //   console.log(carInfo);

  return (
    <div className="card col-md-3 m-1">
      <div className="card-body">
        <h5 className="card-title">{carInfo.make}</h5>
        <h5 className="card-text">{carInfo.model}</h5>
        <h5 className="card-text">{carInfo.year}</h5>
      </div>
    </div>
  );
}

export default React.memo(SingleCar);
