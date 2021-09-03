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
    return <CarsTemplate cars={car} />;
  };

  onClick = () => {
    if (this.state.mappedCars) {
      this.setState({ show: !this.state.show });
    }
  };

  onFilter = (e) => {
    console.log(e.target.value);
    // let cars = this.state.mappedCars;

    this.setState(() => {
      return {
        filteredCars: this.state.cars
          .filter((cars) => cars.year === e.target.name)
          .map(this.mapCars),
      };
    });
    console.log(this.state.filteredCars);

    // let filteredCars = this.state.cars.filter(this.filterByYear);
    // this.setState(() => {
    //   return { mappedCars: filteredCars.map(this.mapCars) };
    // });

    // console.log(this.state.mappedCars);

    // let filteredCars = this.state.cars.filter((cars) => {
    //   return cars.year;
    // });

    // this.setState(() => {
    //   filteredCars.map(this.mapCars);

    //   return { mappedCars: filteredCars };
    // });
  };

  filterByYear = (cars) => {
    // let cars = this.state.cars;
    if (cars.year === 2019 || 2020 || 2021) {
      return true;
    }
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

          <select
            name="select"
            // value={this.state.value}
            onClick={(e) => this.onFilter(e)}
          >
            <option>Select a Year</option>
            <option name={this.state.cars.year}>2019</option>
            <option name={this.state.cars.year}>2020</option>
            <option name={this.state.cars.year}>2021</option>
          </select>

          <hr />
        </div>
        {this.state.show ? this.state.mappedCars : null}
      </div>
    );
  }
}

export default Cars;
