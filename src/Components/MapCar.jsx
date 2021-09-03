import React from "react";

const MapCar = (props) => {
  console.log(props);
  return (
    <React.Fragment key={`Cars-${props.id}`}>
      <div className="card col-md-3 m-1">
        <div className="card-body">
          <h5 className="card-title">Make: {props.make}</h5>
          <h5 className="card-text">Model: {props.model}</h5>
          <h5 className="card-text" id="year">
            Year: {props.year}
          </h5>
        </div>
      </div>
      {/* <div>
        {this.state.cars
          .filter((carYear) => carYear.age < 2020)
          .map((filteredCars) => (
            <li>{filteredCars.name}</li>
          ))}
      </div> */}
    </React.Fragment>
  );
};

export default MapCar;
