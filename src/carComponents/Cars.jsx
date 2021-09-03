import React from "react";
import SingleCar from "./singleCar";

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
    show: false,
    mappedCars: [],
  };

  mapCar = (car) => <SingleCar key={car.id} car={car} />;

  onShowCarsClicked = () => {
    console.log("onShowCarsClicked firing");
    this.setState({ show: !this.state.show });
  };

  onShow2019Clicked = () => {
    let results = this.state.cars.filter(this.filter2019);
    console.log(results);
  };

  filter2019 = (car) => {
    if (car.year === 2019) {
      console.log(car.year);
      return true;
    }
  };

  onShow2020Clicked = () => {
    let results = this.state.cars.filter(this.filter2020);
    console.log(results);
  };

  filter2020 = (car) => {
    if (car.year === 2020) {
      console.log(car.year);
      return true;
    }
  };

  onShow2021Clicked = () => {
    let results = this.state.cars.filter(this.filter2021);
    console.log(results);
  };

  filter2021 = (car) => {
    if (car.year === 2021) {
      console.log(car.year);
      return true;
    }
  };

  render() {
    // var changeDisplay = () => {
    //   this.setState({ show: !this.state });
    // };
    return (
      <div>
        <h1>CARS</h1>

        <button
          className="btn btn-success m-3"
          onClick={this.onShowCarsClicked}
        >
          Show Cars
        </button>

        {this.state.show ? (
          <div>{this.state.cars.map(this.mapCar)}</div>
        ) : (
          <p></p>
        )}
        <button
          className="btn btn-primary p-1 m-1"
          onClick={this.onShow2019Clicked}
        >
          Show 2019
        </button>
        <button
          className="btn btn-primary p-1 m-1"
          onClick={this.onShow2020Clicked}
        >
          Show 2020
        </button>
        <button
          className="btn btn-primary p-1 m-1"
          onClick={this.onShow2021Clicked}
        >
          Show 2021
        </button>
      </div>
    );
  }
}

export default Cars;
