import React from "react";

function CarsCarRender(props) {
  const renderCarInfo = props.banana;
  console.log(renderCarInfo);

  return (
    <div className="card col-md-3 m-1">
      <div className="card-body">
        <h5 className="card-title">Make{renderCarInfo.make}</h5>
        <h5 className="card-text">Model{renderCarInfo.model}</h5>
        <h5 className="card-text">Year{renderCarInfo.year}</h5>
      </div>
    </div>
  );
}

export default CarsCarRender;
