import React from "react";
import CarSingle from "./CarSingle";

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
    mappedCars: [],
    show: false,
  };

  componentDidMount() {
    var mappedCars = this.state.cars.map(this.mapCars);
    this.setState((prevState) => {
      var newCarsArray = { ...prevState };
      newCarsArray = mappedCars;
      return { mappedCars: newCarsArray };
    }, this.stateChanged);
  }

  stateChanged = () => {
    console.log("New State", this.state);
  };

  mapCars = (car) => {
    return (
      <React.Fragment key={`car-${car.make + car.model + car.year}`}>
        <CarSingle car={car} />
      </React.Fragment>
    );
  };

  toggleClicked = () => {
    var showOrNot = false;
    if (this.state.show === false) {
      showOrNot = true;
    }
    this.setState((prevState) => {
      var show = { ...prevState.show };
      show = showOrNot;
      return { show };
    }, this.stateChanged);
  };

  onSelectedYear = (e) => {
    console.log(e.target.value);
    if (e.target.value !== "Select Year") {
      var filteredCars = this.state.cars.filter(
        (x) => x.year === parseInt(e.target.value)
      );
      var mappedFilteredCars = filteredCars.map(this.mapCars);
      this.setState((prevState) => {
        var carsArrayCopy = { ...prevState.mappedCars };
        carsArrayCopy = mappedFilteredCars;
        return { mappedCars: carsArrayCopy };
      }, this.stateChanged);
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Cars</h1>
        <button className="btn btn-primary" onClick={this.toggleClicked}>
          Show Cars
        </button>
        <select
          className="mx-4"
          name="yearDropdown"
          id=""
          onChange={this.onSelectedYear}
        >
          <option value="">Select Year</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
        <div className={this.state.show ? "row" : "d-none"}>
          {this.state.mappedCars}
        </div>
      </div>
    );
  }
}

export default Cars;
