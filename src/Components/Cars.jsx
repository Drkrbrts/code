import React from "react";

class CarsRender extends React.Component {
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

  showAll = () => {
    this.setState((prevState) => {
      return { mappedCars: prevState.cars.map(this.mapCar) };
    });
  };

  mapCar = (oneCar) => {
    return (
      <div
        className="card col-md-3 m-1"
        key={`Cars-${oneCar.model}-${oneCar.year}`}
      >
        <div className="card-body">
          <h5 className="card-title">{oneCar.make}</h5>
          <h5 className="card-text">{oneCar.model}</h5>
          <h5 className="card-text">{oneCar.year}</h5>
        </div>
      </div>
    );
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputData = currentTarget.id;
    // console.log({ currentTarget, newValue });

    this.setState(() => {
      let newState = {};
      newState[inputData] = newValue;
      // console.log({ newState });
      return newState;
    });
  };

  showByYear = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(this.state.cars);
    let yearCar = this.state.cars.year;
    let yearDropdown = this.state.formControlSelect;
    let result = false;
    if (yearDropdown === yearCar) {
      result = true;
    }
    console.log(result);
    return result;
  };

  render() {
    return (
      <div className="col md-12 p5">
        <h1>Cars</h1>
        <hr />
        <div className="row">
          <button
            type="button"
            className="btn btn-secondary col-1"
            onChange={this.onFormFieldChanged}
            onClick={this.showAll}
          >
            Show Cars
          </button>
          <div className="form-group col-1">
            <label htmlFor="exampleFormControlSelect1"></label>
            <select
              className="form-control"
              id="formControlSelect"
              value={this.state.cars.year}
              onChange={this.onFormFieldChanged}
              onSelect={this.showByYear}
            >
              <option value="">Select Year</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
        <div className="row">{this.state.mappedCars}</div>
      </div>
    );
  }
}

export default CarsRender;
