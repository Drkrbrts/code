import React, { Component } from "react";
import CarMapping from "./CarMapping";

class Cars extends React.Component {
  state = {
    carData: [
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
  };

  //mapping...
  mapCars = (oneCar) => {
    return (
      <React.Fragment key={`carId  ${oneCar.year}${oneCar.model}`}>
        <CarMapping car={oneCar}></CarMapping>
      </React.Fragment>
    );
  };

  onShowCarsClicked = () => {
    this.setState((prevState) => {
      // temporary, should be within filtered functions...
      return { mappedCars: this.state.carData.map(this.mapCars) };
    });

    if (this.state.show === true) {
      this.setState((prevState) => {
        return { show: false };
      });
    } else {
      this.setState((prevState) => {
        return { show: true };
      });
    }
    // console.log(this.state.show);
  };

  on2019Selected = () => {
    // this.setState((prevState) => {
    // var mappedCars = this.state.carData.map(this.mapCars);
    console.log("is working");
    //   return { filteredCars: mappedCars.filter(this.filter2019) };
    // });
  };
  //filter function...
  filter2019 = (carData) => {
    let result = false;
    if (carData.year === 2019) {
      return true;
    }
    return result;
  };

  render() {
    return (
      <div>
        <main role="main">
          <div className="col-md-12 p-5">
            <h1>Cars</h1>
            <hr />

            <div className="form-group" style={{ padding: "5px" }}>
              <label htmlFor="form-label"></label>
              <select component="select" name="selectCars">
                <option>Select year</option>
                {/* learn how to fire filter2019 function... by selecting */}
                <option onSelectCapture={this.on2019Selected}>2019</option>
                <option onSelect={this.on2019Selected}>2020</option>
                <option onClick={this.on2019Selected}>2021</option>
              </select>
              <div style={{ padding: "5px" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onShowCarsClicked}
                >
                  Show Cars
                </button>
              </div>
              {this.state.show && (
                <div className="row" style={{ padding: "5px" }}>
                  {/* temporary, should be this.state.filteredCars...line 97 ??? */}
                  {this.state.mappedCars}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Cars;
