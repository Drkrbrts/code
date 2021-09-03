import React from "react";
import SingleCar from "./SingleCar";
import FilterCars from "./FilterCars";

class Cars extends React.Component {
  state = {
    hideCars: [],
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
    this.setState(() => {
      return {
        mappedCars: this.state.cars.map(this.mapSingleCar),
      };
    });
  }

  //   componentDidUpdate() {
  //     this.setState(() => {});
  //   }

  onFormFieldChanged = (e) => {
    let currentTarget = e.target;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    console.log(currentTarget);
    console.log(inputName);
    console.log(newValue);

    this.setState(() => {
      return {
        filteredCars: this.state.cars.filter(this.filterCars),
      };
    });
  };

  mapSingleCar = (car) => <SingleCar singleCar={car} key={car.id} />;

  filterCars = (car) => {
    if (car.year !== 2019) {
      <FilterCars filteredCars={car} />;
    } else {
      return car;
    }
  };

  showAllCars = () => {
    console.log("button clicked");
    if (this.state.mappedCars) {
      <div>{this.state.hideCars}</div>;
    } else {
      <div>{this.state.mappedCars}</div>;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.showAllCars}
            >
              Show/Hide
            </button>
          </div>
          <div className="form-group col-3">
            <select
              className="form-control"
              value={this.state.mappedCars}
              onChange={this.onFormFieldChanged}
            >
              <option value="">Select Year</option>
              <option
                value={this.state.cars.year}
                name="2019"
                onChange={this.onFormFieldChanged}
              >
                2019
              </option>
              <option
                value={this.state.cars.year}
                name="2020"
                onChange={this.onFormFieldChanged}
              >
                2020
              </option>
              <option
                value={this.state.cars.year}
                name="2021"
                onChange={this.onFormFieldChanged}
              >
                2021
              </option>
            </select>
          </div>
        </div>
        <div>{this.state.mappedCars}</div>
        {/* <div>{this.state.filter}</div> */}
      </div>
    );
  }
}

export default Cars;
