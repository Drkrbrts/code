import React from "react";
import SingleCar from "./CarsSingle";

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      showHide: false,
    };
  }

  componentDidMount() {
    this.getCars();
  }

  getCars = () => {
    var updater = (prevState) => {
      var newCars = { ...prevState.cars.newCars };
      newCars = this.state.cars.map(this.mapThisCar);
      return { newCars };
    };
    this.setState(updater);
  };

  mapThisCar = (input) => {
    let outputData = {
      make: input.make,
      model: input.model,
      year: input.year,
    };
    return <SingleCar data={outputData} />;
  };

  onClickShowHideCars = (e) => {
    e.preventDefault();
    var updater = (prevState) => {
      var newShowHide = false;
      if (prevState.showHide === false) {
        newShowHide = true;
      }
      return { showHide: newShowHide };
    };
    this.setState(updater);
  };

  handleFilterChange = (e) => {
    const target = e.target;
    const value = target.value;
    var updater = (prevState) => {
      var filteredCars = prevState.cars;
      if (value === "all") {
        filteredCars = prevState.cars;
      }
      if (value === "2019") {
        filteredCars = prevState.cars.filter(this.filter2019);
      }
      if (value === "2020") {
        filteredCars = prevState.cars.filter(this.filter2020);
      }
      if (value === "2021") {
        filteredCars = prevState.cars.filter(this.filter2021);
      }
      var newCars = filteredCars.map(this.mapThisCar);
      return { newCars };
    };
    this.setState(updater);
  };

  filter2019 = (input) => {
    let result = false;
    result = input.year === 2019;
    return result;
  };

  filter2020 = (input) => {
    let result = false;
    result = input.year === 2020;
    return result;
  };

  filter2021 = (input) => {
    let result = false;
    result = input.year === 2021;
    return result;
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.onClickShowHideCars}>
          Show Cars
        </button>
        <select onChange={this.handleFilterChange}>
          <option value={"all"}>Display All</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
          <option value={2019}>2019</option>
        </select>
        <div>{this.state.showHide && this.state.newCars} </div>
      </div>
    );
  }
}

export default Cars;
