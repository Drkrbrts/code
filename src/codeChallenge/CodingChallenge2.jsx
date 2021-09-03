import React from "react";
import CodingChallenge2Cars from "./CodingChallenge2Cars";

class Cars extends React.Component {
  state = {
    show: true,

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
  };

  mapCars = (car) => {
    return <CodingChallenge2Cars key={car.id} carInfo={car} />;
  };

  handleClick = () => {
    this.setState({ show: false });
  };

  //   componentDidMount() {
  //     let searchResults = this.state.cars.filter(this.filterAllYear);
  //     this.setState((prevState) => {
  //       return { cars: searchResults };
  //     });
  //   }

  //   filterAllYear = (carYear) => {
  //     if (carYear.year === 2018) {
  //       return true;
  //     } else if (carYear.year === 2019) {
  //       return true;
  //     }
  //   };

  onFilterClick2018 = (e) => {
    e.preventDefault();

    let searchResults = this.state.cars.filter(this.filterByYear2018);

    console.log("these are 2018", searchResults);

    this.setState((prevState) => {
      return { cars: searchResults };
    });
  };

  filterByYear2018 = (car2018) => {
    if (car2018.year === 2018) {
      console.log("what does this give?", car2018.year);
      return true;
    }
  };

  onFilterClick2019 = (e) => {
    e.preventDefault();

    let searchResults = this.state.cars.filter(this.filterByYear2019);
    console.log("these are 2019", searchResults);

    this.setState((prevState) => {
      return { cars: searchResults };
    });
  };

  filterByYear2019 = (car2019) => {
    if (car2019.year === 2019) {
      console.log("what does this give?", car2019.year);
      return true;
    }
  };

  onFilterClick2020 = (e) => {
    e.preventDefault();

    let searchResults = this.state.cars.filter(this.filterByYear2020);
    console.log("these are 2020", searchResults);

    this.setState((prevState) => {
      return { cars: searchResults };
    });
  };

  filterByYear2020 = (car2020) => {
    if (car2020.year === 2020) {
      console.log("what does this give?", car2020.year);
      return true;
    }
  };

  onFilterClick2021 = (e) => {
    e.preventDefault();

    let searchResults = this.state.cars.filter(this.filterByYear2021);
    console.log("these are 2021", searchResults);

    this.setState((prevState) => {
      return { cars: searchResults };
    });
  };

  filterByYear2021 = (car2021) => {
    if (car2021.year === 2021) {
      console.log("what does this give?", car2021.year);
      return true;
    }
  };
  //   filterCars = (car) => {
  //     console.log(car);
  //   };

  // is2019 = (value) => {
  //     return value === 2019
  // }

  //   cars2019 = () => {
  //     let searchResults = this.state.cars.year.filter(2019);
  //     console.log(searchResults);
  //   };

  render() {
    var handleChange = () => {
      this.setState({ show: !this.state.show });
    };

    return (
      <div>
        <button onClick={this.onFilterClick2018}>2018</button>

        <button onClick={this.onFilterClick2019}>2019</button>

        <button onClick={this.onFilterClick2020}>2020</button>

        <button onClick={this.onFilterClick2021}>2021</button>

        <h1>Cars</h1>
        {this.state.show ? (
          <div>
            <button
              className=" px-2 btn btn-outline-primary"
              onClick={this.handleClick}
              type="submit"
            >
              Hide Cars
            </button>
            {this.state.cars.map(this.mapCars)}
          </div>
        ) : (
          <button
            className=" px-2 btn btn-outline-primary"
            onClick={handleChange}
            type="submit"
          >
            Show Cars
          </button>
        )}

        {/* {this.state.cars.map(this.mapCars)} */}
      </div>
    );
  }
}

export default Cars;
