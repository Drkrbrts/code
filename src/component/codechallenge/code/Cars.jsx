import React from "react";
import CarsTemplate from "./CarsTemplate";

class Cars extends React.Component {
  state = {
    show: true,
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

  componentDidMount() {
    this.setState(() => {
      return { mappedCars: this.state.cars.map(this.mapCars) };
    });
    console.log(this.state);
  }

  mapCars = (car) => {
    return (
      <CarsTemplate
        key={`This is a ${car.make} ${car.model} ${car.year}`}
        cars={car}
      />
    );
  };

  onClick = () => {
    if (this.state.mappedCars) {
      this.setState({ show: !this.state.show });
    }
  };

  onFilter = (e) => {
    console.log(e.target.value);
    let targetCar = parseInt(e.target.value);

    this.setState(() => {
      return {
        mappedCars: this.state.cars
          .filter((car) => car.year === targetCar)
          .map(this.mapCars),
      };
    });
    console.log(this.state.mappedCars);
  };

  render() {
    return (
      <div className="row">
        <div>
          {this.state.show ? (
            <button className="btn btn-danger m-2" onClick={this.onClick}>
              Hide Me!
            </button>
          ) : (
            <button className="btn btn-success m-2" onClick={this.onClick}>
              Show Me!
            </button>
          )}

          {/* <button name="2019" className="m-2" onClick={this.onFilter}>
            2019
          </button>
          <button name="2020" className="m-2" onClick={this.onFilter}>
            2020
          </button>
          <button name="2021" className="m-2" onClick={this.onFilter}>
            2021
          </button> */}

          <select
            // value={this.state.value}
            onChange={this.onFilter}
          >
            <option>Select a Year</option>
            <option name="2018">2018</option>
            <option name="2019">2019</option>
            <option name="2020">2020</option>
            <option name="2021">2021</option>
          </select>

          <hr />
        </div>
        {this.state.show ? this.state.mappedCars : null}
      </div>
    );
  }
}

export default Cars;
