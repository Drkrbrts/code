import React from "react";
import Car from "./Car";

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

  componentDidMount() {
    this.renderCars();
  }

  renderCars = () => {
    this.setState((prevState) => {
      return { mappedCars: prevState.cars.map(this.mapCar) };
    });
  };

  onShowCarsClicked = () => {
    console.log("Show car was clicked");
  };
  //   this.setState((prevState) => {
  //     return { mappedCars: state.map(this.mapCar) };
  //   });

  mapCar = (oneCar) => {
    return (
      <React.Fragment>
        <Car car={oneCar} />
      </React.Fragment>
    );
  };

  //   filterCar(car) {
  //     let result = false;
  //     if (car.year == year) {
  //       result = true;
  //     }
  //     return result;
  //   }
  render() {
    return (
      <div className="col-md-12 p-5">
        <h1>Cars</h1>
        <hr />
        <button
          className="btn btn-primary button"
          onClick={this.onShowCarsClicked}
        >
          Show Cars
        </button>
        <div className="mb-3">
          <label htmlFor="exampleFormControlSelect" className="form-label">
            Year
          </label>
          <select
            className="form-control"
            // value={this.state.formData.statusId}
            // onChange={this.onFormFieldChanged}
            name="year"
          >
            <option value="">Select Year</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
        <div className="row">{this.state.mappedCars}</div>
      </div>
    );
  }
}

export default Cars;
