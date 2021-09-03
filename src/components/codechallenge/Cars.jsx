import React from "react";
import CarCard from "./CarCard";

export default class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carsArray: [
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
      selection: "All",
      showCars: false,
    };
  }

  componentDidMount = () => {
    this.generateNewMap();
  };

  onShowCarsClick = (e) => {
    e.preventDefault();
    this.setState(() => {
      return { showCars: !this.state.showCars };
    });
  };

  onSelectionChange = (e) => {
    const newSelection = e.currentTarget.value;
    this.setState(() => {
      return {
        selection: newSelection,
      };
    }, this.generateNewMap);
  };

  generateNewMap = () => {
    if (this.state.selection === "All") {
      this.setState(() => {
        return { mappedCars: this.state.carsArray.map(this.mapCar) };
      });
    } else {
      this.setState(() => {
        return {
          mappedCars: this.state.carsArray
            .filter(this.filterCar)
            .map(this.mapCar),
        };
      });
    }
  };

  mapCar = (car) => {
    const generatedKey = (car) => {
      return `${car.make}-${car.model}-${car.year}-${new Date().getTime()}`;
    };
    return <CarCard key={generatedKey(car)} car={car} />;
  };

  filterCar = (car) => {
    return car.year.toString() === this.state.selection ? true : false;
  };

  render() {
    return (
      <>
        <h3>Used Cars For Sale!</h3>
        <hr />
        <div>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={this.onShowCarsClick}
          >
            Show Cars
          </button>
          <select defaultValue="All" onChange={this.onSelectionChange}>
            <option value="All">Show All</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
        {this.state.showCars && (
          <div className="row">{this.state.mappedCars}</div>
        )}
      </>
    );
  }
}
