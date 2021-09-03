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
    show: true,
  };

  componentDidMount() {
    this.setState((prevState) => {
      return { mappedCars: prevState.cars.map(this.mapCar) };
    });

    console.log("hot diggity");
  }

  mapCar = (oneCar) => {
    return <SingleCar key={oneCar.id} car={oneCar}></SingleCar>;
  };

  handleHide = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  onNineteenClicked = (year) => {
    let cars = [...this.state.cars];
    let filteredCars = cars.filter((item) => {
      return item.year === year;
    });

    this.setState((prevState) => {
      return { ...prevState, mappedCars: filteredCars.map(this.mapCar) };
    });
  };

  //   onNineteenClicked = () => {
  //     let results = this.state.cars.filter(this.filter2019);
  //     console.log(results);
  //   };

  //   filter2019 = (car) => {
  //     if (car.year === 2019) {
  //       this.setState({ show: !this.state.show });
  //       console.log(car.year);
  //       return true;
  //     }
  //   };

  onTwentyClicked = () => {};

  onTwentyOneClicked = () => {};

  render() {
    return (
      <div className="col-md-12 p-5">
        <strong>Cars</strong>
        <div className="col"></div>

        <button className="btn btn-success" onClick={this.handleShow}>
          Show
        </button>

        {this.state.show ? (
          <button className="btn btn-info" onClick={this.handleHide}>
            Hide
          </button>
        ) : (
          <h4>Fugasi</h4>
        )}

        <button className="btn btn-secondary" onClick={this.onNineteenClicked}>
          2019
        </button>
        {this.state.mappedCars.year === 2019
          ? this.state.mappedCars
          : "No cars to show"}

        <button className="btn btn-secondary" onClick={this.onTwentyClicked}>
          2020
        </button>

        <button className="btn btn-secondary" onClick={this.onTwentyOneClicked}>
          2021
        </button>

        {/* <div className="dropdown">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Year of Car</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={this.handleChange}
            >
              <option value="">Select Year</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </div> */}

        <hr />
        <div className="row">
          {/*this.state.cars.map(this.mapCar*/}
          {this.state.mappedCars}
        </div>
      </div>
    );
  }
}

export default Cars;
