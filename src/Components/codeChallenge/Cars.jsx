import React from "react";
import CarDetails from "./CarDetails";

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
    show: [],
    showAll: true,
    value: "Show All",
  };

  showHideCars = () => {
    if (this.state.showAll === true) {
      console.log("all cars must show");

      this.setState({ showAll: false });
      //   this.setState({ cars });
    } else {
      console.log("All cars must hide!");
      this.setState({ showAll: true });
    }
  };

  componentDidMount() {
    let show = [...this.state.cars];
    this.setState({ show });
  }

  mapCars = (car) => {
    return (
      <CarDetails
        key={`${Math.floor(Math.random() * 200)} + ${car.make} + ${Math.floor(
          Math.random() * 200
        )} `}
        year={car.year}
        model={car.model}
        make={car.make}
      />
    );
  };

  handleSelect = (e) => {
    let currentTarget = e.target.value;
    this.setState({ value: currentTarget });

    if (currentTarget === "Show All") {
      this.setState({ show: this.state.cars });
      return;
    }
    // const initialCars = [...this.state.cars];
    // let cars = [...initialCars];
    // this.setState({ cars });

    const display = this.state.cars.filter(
      (car) => car.year === parseInt(currentTarget)
    );
    this.setState({ show: display });

    // if (currentTarget === "2021") {
    //   cars = cars.filter((car) => car.year === parseInt(currentTarget));

    //   this.setState({ cars });
    // } else if (currentTarget === "2020") {
    //   cars = this.state.cars.filter(
    //     (car) => car.year === parseInt(currentTarget)
    //   );

    //   this.setState({ cars });
    // } else if (currentTarget === "2019") {
    //   cars = this.state.cars.filter(
    //     (car) => car.year === parseInt(currentTarget)
    //   );

    //   this.setState({ cars });
    // } else {
    //   cars = [...initialCars];
    //   this.setState({ cars });
    // }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1">
            <button onClick={this.showHideCars} className="btn btn-primary m-3">
              show cars
            </button>
          </div>
          <div className="col-md-1 m-3">
            <select
              value={this.state.value}
              onChange={this.handleSelect}
              className="form-select form-select-sm"
            >
              <option value="Show All">Show All</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
        </div>
        {this.state.showAll ? (
          <div className="row">{this.state.show.map(this.mapCars)}</div>
        ) : (
          <div className="row"></div>
        )}
      </div>
    );
  }
}

export default Cars;
