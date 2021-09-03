import React from "react";
import CarCard from "./mapClone";

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
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
  }
  componentDidMount() {
    this.setState((prevState) => {
      return {
        mappedCars: prevState.cars.map(this.mapCars),
      };
    });
  }
  mapCars = (car) => (
    <CarCard key={Math.floor(Math.random() * 1000) + 1} car={car} />
  );
  toggleCars = () => {
    this.setState((prevState) => {
      return {
        isHidden: !prevState.isHidden,
      };
    });
  };
  filterYear = (e) => {
    console.log(e.target.id);
    if (e.target.id === "2021") {
      let filter2021 = this.state.cars.filter((car) => car.year === 2021);
      this.setState((prevState) => {
        return {
          ...prevState,
          mappedCars: filter2021.map(this.mapCars),
        };
      });
    } else if (e.target.id === "2020") {
      let filter2020 = this.state.cars.filter((car) => car.year === 2020);
      this.setState((prevState) => {
        return {
          ...prevState,
          mappedCars: filter2020.map(this.mapCars),
        };
      });
    } else if (e.target.id === "2019") {
      let filter2019 = this.state.cars.filter((car) => car.year === 2019);
      this.setState((prevState) => {
        return {
          ...prevState,
          mappedCars: filter2019.map(this.mapCars),
        };
      });
    } else if (e.target.id === "2018") {
      let filter2018 = this.state.cars.filter((car) => car.year === 2018);
      this.setState((prevState) => {
        return {
          ...prevState,
          mappedCars: filter2018.map(this.mapCars),
        };
      });
    } else if (e.target.id === "showAll") {
      this.setState((prevState) => {
        return {
          mappedCars: prevState.cars.map(this.mapCars),
        };
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="buttonContainer">
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={this.toggleCars}
          >
            Show Cars
          </button>
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle m-1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter By Year
          </button>
          <ul
            className="dropdown-menu p-3"
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            <li onClick={this.filterYear} id="showAll">
              Show All Cars
            </li>
            <li onClick={this.filterYear} id={2021}>
              2021
            </li>
            <li onClick={this.filterYear} id={2020}>
              2020
            </li>
            <li onClick={this.filterYear} id={2019}>
              2019
            </li>
            <li onClick={this.filterYear} id={2018}>
              2018
            </li>
          </ul>
        </div>
        <div className="row row-cols-1 row-cols-md-3 m-5 g-4">
          {this.state.isHidden ? <div></div> : this.state.mappedCars}
        </div>
      </React.Fragment>
    );
  }
}

export default Cars;
