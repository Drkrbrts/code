import React, { Component } from "react";
import SingleCar from "./singleCars";

class Cars extends Component {
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
    showCars: false,
    selectedYear: "",
  };

  componentDidMount() {
    this.renderCars();
  }

  renderCars() {
    var carsArr = this.state.cars;

    this.setState((prevState) => {
      return {
        ...prevState,
        mappedCars: carsArr.map(this.mapCar),
      };
    });
  }

  mapCar = (car) => {
    return (
      <React.Fragment key={`${car.model}-${car.year}`}>
        <SingleCar car={car}></SingleCar>
      </React.Fragment>
    );
  };

  toggleCars = () => {
    this.setState((prevState) => {
      return {
        showCars: !prevState.showCars,
      };
    });
  };

  onChangeFormData = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;

    this.setState((prevState) => {
      const byYear = prevState.cars.filter((car) => car.year == newValue);

      return { cars: byYear, selectedYear: newValue };
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <button
            className="btn btn-primary my-2 me-2"
            onClick={this.toggleCars}
          >
            Show Cars
          </button>
          <form>
            <label>
              Select a year:
              <select
                value={this.state.selectedYear}
                onChange={this.onChangeFormData}
              >
                <option value="showAll">Show All</option>
                <option value="2019"> 2019</option>
                <option value="2020"> 2020</option>
                <option value="2021"> 2021</option>
              </select>
            </label>
          </form>

          {this.state.showCars && (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-2">
              {this.state.mappedCars}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Cars;
