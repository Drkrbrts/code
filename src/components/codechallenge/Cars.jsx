import React from "react";
import SingleCar from "./SingleCar";

class Cars extends React.Component {
  state = {
    cars: [
      {
        make: "Kia",
        model: "Sorento",
        year: 2020,
      },
      {
        make: "Kia",
        model: "Optima",
        year: 2019,
      },
      {
        make: "Tesla",
        model: "Model 3",
        year: 2021,
      },
      {
        make: "Honda",
        model: "Civic",
        year: 2019,
      },
      {
        make: "Honda",
        model: "Accord",
        year: 2018,
      },
      {
        make: "Volkswagen",
        model: "Jetta",
        year: 2021,
      },
      {
        make: "Toyota",
        model: "Camry",
        year: 2021,
      },
      {
        make: "Ford",
        model: "Mustang",
        year: 2019,
      },
      {
        make: "Ford",
        model: "F-150",
        year: 2019,
      },
      {
        make: "Toyota",
        model: "Camry",
        year: 2020,
      },
      {
        make: "Ford",
        model: "F-150",
        year: 2021,
      },
    ],
    show: true,
  };

  componentDidMount() {
    console.log("Cars component did mount");
    var carData = [...this.state.cars];
    console.log(carData);
    this.setState((preState) => {
      return {
        mappedCars: carData.map(this.mapCar),
      };
    });
  }

  //create a filter to filter through car year

  displayCarBtn = () => {
    console.log("cars shown");
    this.setState({ show: false });
  };

  hideCarBtn = () => {
    console.log("cars hidden");
    this.setState({ show: true });
  };
  car2021Btn = (e) => {
    console.log("2021 cars diplayed");
    var carData = [...this.state.cars];
    const result = carData.filter((car) => car.year === 2021);
    console.log(result);
    this.setState((preState) => {
      return {
        mappedCars: result.map(this.mapCar),
      };
    });
  };
  car2020Btn = () => {
    console.log("2020 cars diplayed");
    var carData = [...this.state.cars];
    const result = carData.filter((car) => car.year === 2020);
    console.log(result);
    this.setState((preState) => {
      return {
        mappedCars: result.map(this.mapCar),
      };
    });
  };
  car2019Btn = () => {
    console.log("2019 cars diplayed");
    var carData = [...this.state.cars];
    const result = carData.filter((car) => car.year === 2019);
    console.log(result);
    this.setState((preState) => {
      return {
        mappedCars: result.map(this.mapCar),
      };
    });
  };

  mapCar = (oneCar) => {
    return (
      <React.Fragment key={`Cars- ${oneCar.model + oneCar.year}`}>
        <SingleCar car={oneCar}></SingleCar>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-md-12 p-5">
          <h1>Cars</h1>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={this.hideCarBtn}
          >
            Hide Cars
          </button>
          {this.state.show ? (
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.displayCarBtn}
            >
              Show All Cars
            </button>
          ) : (
            <div name="cars">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.car2021Btn}
              >
                2021 Cars
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.car2020Btn}
              >
                2020 Cars
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.car2019Btn}
              >
                2019 Cars
              </button>
              <div className="row">{this.state.mappedCars}</div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default Cars;
