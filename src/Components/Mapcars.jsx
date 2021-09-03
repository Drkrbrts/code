import React from "react";

class Mapcars extends React.Component {
  componentDidMount() {
    this.setState((preState) => {
      return { mappedCars: preState.cars.map(this.mapCar) };
    });
  }

  mapCar = (oneCar) => {
    return (
      <React.Fragment key={`Cars-${oneCar.id}`}>
        <div className="card col-md-3 m-1">
          <div className="card-body">
            <h5 className="card-title">Make: {oneCar.make}</h5>
            <h5 className="card-text">Model: {oneCar.model}</h5>
            <h5 className="card-text">Year: {oneCar.year}</h5>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default Mapcars;
