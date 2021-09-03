import React from "react";
import Car from "./Car";

class Cars extends React.Component {
  state = {
    cars: [
      {
        id: 1,
        make: "Kia",
        model: "Sorento",
        year: 2020,
      },
      {
        id: 2,
        make: "Kia",
        model: "Optima",
        year: 2019,
      },
      {
        id: 3,
        make: "Tesla",
        model: "Model 3",
        year: 2021,
      },
      {
        id: 4,
        make: "Honda",
        model: "Civic",
        year: 2019,
      },
      {
        id: 5,
        make: "Honda",
        model: "Accord",
        year: 2018,
      },
      {
        id: 6,
        make: "Volkswagen",
        model: "Jetta",
        year: 2021,
      },
      {
        id: 7,
        make: "Toyota",
        model: "Camry",
        year: 2021,
      },
      {
        id: 8,
        make: "Ford",
        model: "Mustang",
        year: 2019,
      },
      {
        id: 9,
        make: "Ford",
        model: "F-150",
        year: 2019,
      },
      {
        id: 10,
        make: "Toyota",
        model: "Camry",
        year: 2020,
      },
      {
        id: 11,
        make: "Ford",
        model: "F-150",
        year: 2021,
      },
    ],
  };

  componentDidMount() {
    //console.log("component firing");
    let newCar = this.state.cars;
    let mappedCars = newCar.map(this.mapCars);

    this.setState((prevState) => {
      return {
        Cars: mappedCars,
      };
    });
  }

  onShowCarsClicked = (e) => {
    e.preventDefault();
    // console.log("button is clicked", new Date());
    this.setState((prevState) => {
      return { show: !prevState.show };
    });
  };

  mapCars = (oneCar) => {
    return (
      <React.Fragment key={`Cars-${oneCar.id}`}>
        <Car car={oneCar}></Car>
      </React.Fragment>
    );
  };

  select2019 = () => {
    let newCar = [...this.state.cars];
    const result = newCar.filter((car) => car.year === 2019);
    //console.log(result);
    this.setState((preState) => {
      return {
        Cars: result.map(this.mapCars),
      };
    });
  };

  select2020 = () => {
    let newCar = [...this.state.cars];
    const result = newCar.filter((car) => car.year === 2020);
    //console.log(result);
    this.setState((preState) => {
      return {
        Cars: result.map(this.mapCars),
      };
    });
  };

  select2021 = () => {
    let newCar = [...this.state.cars];
    const result = newCar.filter((car) => car.year === 2021);
    //console.log(result);
    this.setState((preState) => {
      return {
        Cars: result.map(this.mapCars),
      };
    });
  };

  render() {
    return (
      <>
        <div className="p-5">
          <h1>Cars</h1>
          <button
            className="btn btn-warning m-3"
            onClick={this.onShowCarsClicked}
          >
            Show Cars
          </button>
          <div className="col-3 d-flex-inline h-75 float-end m-3">
            <h5>Select Year</h5>

            <button onClick={this.select2021} value="2021">
              2021
            </button>
            <button onClick={this.select2020} value="2020">
              2020
            </button>
            <button onClick={this.select2019} value="2019">
              2019
            </button>
          </div>
          <hr />
          {this.state.show && <div className="row">{this.state.Cars}</div>}
        </div>
      </>
    );
  }
}

export default Cars;
