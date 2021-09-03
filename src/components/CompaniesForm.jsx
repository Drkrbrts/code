import React from "react";

function FormTech(props) {
  const oneCar = props.car;
  return (
    <React.Fragment>
      <div className="card col-md-3 m-1">
        <div className="card-body">
          <h5 className="card-title">{oneCar.make}</h5>
          <h5 className="card-text">{oneCar.model}</h5>
          <h5 className="card-text">{oneCar.year}</h5>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FormTech;