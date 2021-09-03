import React, { Component } from "react";
import Car from "./Car";

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
    show: false,
    year: "all",
  };

  Showcars = () => {
    const newShow = !this.state.show;
    this.setState({ show: newShow });
  };

  //filterYear = ()=> {
  //let newCars = this.state.cars.filter(car.year !==2018)

  //}//
  setYear = (e) => {
    console.log(e);
    this.setState({ year: e.target.value });
  };
  render() {
    const cars =
      this.state.show &&
      this.state.cars
        .filter((car) => {
          if (this.state.year === "all") {
            return true;
          }
          const year = parseInt(this.state.year);
          return car.year === year;
        })
        .map((car, index) => <Car car={car} key={index} />);

    return (
      <div>
        <h1>Cars</h1>
        <button
          type="button"
          class="btn btn-success btn-lg btn-blockon"
          onClick={this.Showcars}
        >
          Show
        </button>
        <select value={this.state.year} onChange={this.setYear}>
          <option value="all">All</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>

        <div className="row">{cars}</div>
      </div>
    );
  }
}

export default Cars;
