import React from "react";
import CarsSingle from "./CarsSingle";

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
    mappedCars: [],
    toggleCars: true,
    formData: {
      year: "",
    },
  };

  componentDidMount() {
    console.log("componentDidMount firing");
    this.setState((prevState) => {
      let mappedCars = { ...prevState.mappedCars };
      mappedCars = this.state.cars.map(this.mapCars);
      return { ...prevState, mappedCars };
    });
  }

  mapCars = (car) => <CarsSingle key={car.id} car={car} />;

  toggleCars = () => {
    console.log("toggleCars firing", this.state.toggleCars);
    this.setState((prevState) => {
      let toggleCars = { ...prevState.toggleCars };
      toggleCars = !prevState.toggleCars;
      return { ...prevState, toggleCars };
    });
  };

  onFormFieldChange = (e) => {
    let target = e.currentTarget;
    let newValue = target.value;
    let inputName = target.name;
    console.log("onFormFieldChange", newValue, inputName);
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData[inputName] = newValue;
      return { ...prevState, formData };
    }, this.filteredCars);
  };

  filteredCars = () => {
    let filteredCars = this.state.cars.filter(this.filterCars);
    console.log("filteredCars firing", filteredCars);
    this.setState((prevState) => {
      let mappedCars = { ...prevState.mappedCars };
      mappedCars = filteredCars.map(this.mapCars);
      return { ...prevState, mappedCars };
    });
  };

  filterCars = (car) => this.state.formData.year === car.year.toString();

  render() {
    console.log("render firing");
    return (
      <div className="container mt-3">
        <div className="row">
          <h2>Cars</h2>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex-inline border align-self-center">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.toggleCars}
            >
              Show Cars
            </button>
          </div>
          <div className="d-flex-inline h-75 align-self-center">
            <select
              name="year"
              id="year"
              className="form-control"
              onChange={this.onFormFieldChange}
            >
              <option value="">Select Year</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-start mx-5">
          {this.state.toggleCars && this.state.mappedCars}
        </div>
      </div>
    );
  }
}
export default Cars;
