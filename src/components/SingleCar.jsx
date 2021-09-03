import React from "react";

function Car(props) {
  const thisCar = props.theCars;

  return (
    <>
      <div className="card col-md-3 m-1">
        <div className="card-body">
          <h5 className="card-title">{thisCar.make}</h5>
          <h5 className="card-text">{thisCar.model}</h5>
          <h5 className="card-text">{thisCar.year}</h5>
        </div>
      </div>
    </>
  );
}

export default Car;
