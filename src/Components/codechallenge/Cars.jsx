import React from "react";
import CarsCarRender from "./CarsCarRender";

class Cars extends React.Component {
  state = {
    Cars: [
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

  onRenderCars = () => {
    console.log("clicked");

    var listOfCars = this.state.Cars;
    console.log(listOfCars);

    this.setState((prevState) => {
      return {
        mappedCars: listOfCars.map(this.mapCars),
      };
    });
  };
  showCars = () => {
    this.mapCars();
  };
  mapCars = (oneCar) => {
    return (
      <React.Fragment>
        <CarsCarRender banana={oneCar} />
      </React.Fragment>
    );
  };
  //   filteredCars = mapCars.filter(filtCars);
  //   filtCars = (filter) => {
  //     let result = false;
  //     if (filter === "1") {
  //       result = true;
  //     }
  //     if (filter === "2") {
  //       result = true;
  //     }
  //     if (filter === "3") {
  //       result = true;
  //     }
  //     return result;
  //   };
  render() {
    return (
      <React.Fragment>
        <div className="col=me-12">
          {this.state.mappedCars}
          {/* {this.mappedCars} */}
          {this.filteredCars}
        </div>
        <div className="selection">
          <select name="cars" id="cars">
            <option value="1">2021</option>
            <option value="2">2020</option>
            <option value="3">2019</option>
          </select>
        </div>
        <button className="btn btn-primary btn-md" onClick={this.showCars}>
          Show Cars
        </button>
      </React.Fragment>
    );
  }
}

export default Cars;
