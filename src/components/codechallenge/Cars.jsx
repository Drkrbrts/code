import React from "react";
import Carcard from "./Carcard";

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
    toggleOn: true,
    selectedYear: "",
  };

  onShowCard = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.toggleOn = !prevState.toggleOn;
      return newState;
    });
  };
  filterCars = (cars) => {
    let result = false;
    if (this.state.selectedYear === "") {
      result = true;
    }
    if (cars.year === this.state.selectedYear) {
      result = true;
    }
    return result;
  };

  onSelectChange = (e) => {
    let newValue = parseInt(e.currentTarget.value);
    if (e.currentTarget.value !== "") {
      this.setState({ selectedYear: newValue });
    } else {
      this.setState({ selectedYear: e.currentTarget.value });
    }
  };

  render() {
    return (
      <>
        <div className="col-md-3 m-1">
          <button onClick={this.onShowCard} className="btn btn-primary">
            Show Cars
          </button>
          <select
            onChange={this.onSelectChange}
            value={this.state.selectedYear}
          >
            <option value={""}>Show All</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
        <div className="row">
          {this.state.toggleOn && (
            <Carcard
              filteredCars={this.state.cars.filter(this.filterCars)}
              myCar={this.state.cars}
              yearSelected={this.state.seletedYear}
            />
          )}
        </div>
      </>
    );
  }
}
export default Cars;
