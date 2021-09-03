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
  };

  mapCars = (car, key) => {
    return <SingleCar key={key} car={car} />;
  };

  onShowCars = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        mappedCars: prevState.cars.map(this.mapCars),
      };
    });
  };

  onSelectYear = (e) => {
    console.log(e.currentTarget.value);
    let yearSelected = e.currentTarget.value;

    this.setState(
      (prevState) => {
        let carYears = prevState.cars;
        if (yearSelected !== "showAll") {
          carYears = carYears.filter((car) => car.year == yearSelected);
        }

        return {
          ...prevState,
          mappedCars: carYears.map(this.mapCars),
          value: yearSelected,
        };
      },
      () => {
        console.log(
          "mappedCars:",
          this.state.mappedCars,
          "value:",
          this.state.value
        );
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="col-12 text-center">Cars</h1>
          <div className="text-center">
            <button type="button" onClick={this.onShowCars}>
              Show Cars
            </button>
          </div>
          <div>
            <select
              name="cars"
              value={this.state.value}
              onChange={this.onSelectYear}
            >
              <option value="showAll">Show All</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
        </div>
        <div className="row">{this.state.mappedCars}</div>
      </div>
    );
  }
}

export default Cars;
