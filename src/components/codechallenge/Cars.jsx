import React from "react";
import ShowCars from "./ShowCars";

class Cars extends React.Component {
  state = {
    cars: [
      {
        make: "Kia",
        model: "Sorento",
        year: 2020,
        id: 1,
      },
      {
        make: "Kia",
        model: "Optima",
        year: 2019,
        id: 2,
      },
      {
        make: "Tesla",
        model: "Model 3",
        year: 2021,
        id: 3,
      },
      {
        make: "Honda",
        model: "Civic",
        year: 2019,
        id: 4,
      },
      {
        make: "Honda",
        model: "Accord",
        year: 2018,
        id: 5,
      },
      {
        make: "Volkswagen",
        model: "Jetta",
        year: 2021,
        id: 6,
      },
      {
        make: "Toyota",
        model: "Camry",
        year: 2021,
        id: 7,
      },
      {
        make: "Ford",
        model: "Mustang",
        year: 2019,
        id: 8,
      },
      {
        make: "Ford",
        model: "F-150",
        year: 2019,
        id: 9,
      },
      {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        id: 10,
      },
      {
        make: "Ford",
        model: "F-150",
        year: 2021,
        id: 11,
      },
    ],
  };

  componentDidMount() {
    this.setState((prevState) => {
      return { mappedCars: prevState.cars.map(this.mapCar) };
    });
  }
  //I was getting a saying they need keys so I added an id in the
  // array to create a key and get rid of my error.
  mapCar = (oneCar) => {
    return <ShowCars car={oneCar} key={oneCar.id}></ShowCars>;
  };

  filterCars = (oneCar) => {
    //did my filtering here
    let result = false;
    if (oneCar.year === 2021) {
      result = true;
    }
    if (oneCar.year === 2020) {
      result = true;
    }
    if (oneCar.year === 2019) {
      result = true;
    }
    return result;
  };

  //couldnt figure out the dropdown so I added button instead. Attenmpted to do filtering up top
  onShowCars = () => {};
  on2021 = (car) => {
    <div>{this.state.cars.filter((car) => car.year === 2021)}</div>;
  };
  on2020 = (car) => {};
  on2019 = (car) => {};

  render() {
    return (
      <div className="col-md-12 p-5">
        <h1> Cars </h1>
        <hr />
        <div className="d-grid gap-2 d-md-flex justify-content-md">
          <button
            className="btn btn-primary me-md-2"
            type="button"
            onClick={this.onShowCars}
          >
            Show Cars
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.on2021}
          >
            2021
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.on2020}
          >
            2020
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.on2019}
          >
            2019
          </button>
        </div>
        <div className="row">{this.state.mappedCars}</div>
      </div>
    );
  }
}
export default Cars;
