import React from "react";
import SingleCar from "./SingleCar";

class Cars extends React.Component {
  state = {
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
    shownCars: [],
  };

  componentDidMount() {
    this.renderCars();
  }

  on2021Clicked = (carsAr) => {
    var twentyOne = carsAr.filter((carsAr) => carsAr.year === 2021);
    console.log(twentyOne);
    this.setState((prevState) => {
      const cars = twentyOne;
      return {
        cars,
        formData: null,
      };
    }, this.stateChanged);
    // I could only get it to console.log, not render to the page.
  };

  onToggleClicked = (cars) => {
    console.log("testing toggle");

    let identity = cars.mappedCars.id;
    this.setState((prevState) => {
      const indexOfCar = prevState.mappedCars.findIndex(
        (singleArrayMember) =>
          singleArrayMember.props.children.props.car.id === cars
      );
      const mappedCars = [...prevState.mappedCars];
      if (indexOfCar === -1) {
        mappedCars.splice(0, mappedCars.length);
        console.log(mappedCars);
      }

      //  I could not get them to come back after I deleted them...

      return {
        mappedCars,
        formData: null,
      };
    }, this.stateChanged);
  };

  renderCars = () => {
    console.log();
    var carArray = this.state.cars;
    this.setState((prevState) => {
      return { mappedCars: carArray.map(this.mapCar) };
    });
  };

  mapCar = (state) => {
    return (
      <React.Fragment key={`Cars-${state.id}`}>
        <SingleCar car={state}></SingleCar>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="col-md-10 p-5">
        <h1>Cars</h1>
        <hr />
        <div className="row">{this.state.mappedCars}</div>
        <button onClick={() => this.onToggleClicked(this.state)}>Toggle</button>
        <button onClick={() => this.on2021Clicked(this.state.cars)}>
          2021
        </button>
      </div>
    );
  }
}

export default Cars;
