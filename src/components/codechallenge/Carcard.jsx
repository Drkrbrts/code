import React from "react";

function Carcard(props) {
  let mapCar = (car) => {
    return (
      <div className="card col-md-3 m-1" key={`Car=${car.model}${car.year}`}>
        <div className="card-body">
          <h5 className="card-title">{car.make}</h5>
          <h5 className="card-text">{car.model}</h5>
          <h5 className="card-text">{car.year}</h5>
        </div>
      </div>
    );
  };

  return props.filteredCars.map(mapCar);
}
export default Carcard;
