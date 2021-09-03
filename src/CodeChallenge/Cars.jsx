import React from "react";

// import ShowCars from "../CodeChallenge/ShowCars";

class Cars extends React.Component {
  state = {
    mappedCarData: [
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

  mapCars = (theCars) => {
    return (
      <React.Fragment key={`data-${theCars.id}`}>
        <div className="card col-md-3 m-1">
          <div className="card-body">
            <h5 className="card-title">{theCars.make}</h5>
            <h5 className="card-text">{theCars.model}</h5>
            <h5 className="card-text">{theCars.year}</h5>
          </div>
        </div>
      </React.Fragment>
    );
  };

  onShow2018Clicked = () => {
    var cars = [...this.state.mappedCarData];
    const result = cars.filter((car) => car.year === 2018);
    this.setState(() => {
      return { mappedCarData: result.map(this.mapCars) };
    });
  };

  onShow2019Clicked = () => {
    var cars = [...this.state.mappedCarData];
    const result = cars.filter((car) => car.year === 2019);
    this.setState(() => {
      return { mappedCarData: result.map(this.mapCars) };
    });
  };

  onShow2020Clicked = () => {
    var cars = [...this.state.mappedCarData];
    const result = cars.filter((car) => car.year === 2020);
    this.setState(() => {
      return { mappedCarData: result.map(this.mapCars) };
    });
  };

  onShow2021Clicked = () => {
    var cars = [...this.state.mappedCarData];
    const result = cars.filter((car) => car.year === 2021);
    this.setState(() => {
      return { mappedCarData: result.map(this.mapCars) };
    });
  };
  // filterCars = (year) => {
  //   let filterCars = [...this.state.mappedCarData];
  //   let filteringCars = filterCars.filter((item) => {
  //     return item.year === year;
  //   });
  //   this.setState((prevState) => {
  //     return {
  //       mappedCarData: filteringCars.map(this.mapCars),
  //     };
  //   });
  // };

  render() {
    return (
      <div className="col-md-12 p-5">
        <h1>Cars</h1>
        <div className="form-group">
          <label htmlFor="exampleSelect"></label>
          <select
            className="form-control"
            // value={this.state.mappedCarData.year}
          >
            <option value="">Select Year</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
          </select>
        </div>

        <button type="button" className="btn btn-primary m-1">
          Show Cars
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={this.onShow2018Clicked}
        >
          2018
        </button>

        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={this.onShow2019Clicked}
        >
          2019
        </button>

        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={this.onShow2020Clicked}
        >
          2020
        </button>

        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={this.onShow2021Clicked}
        >
          2021
        </button>

        <hr />
        {/* <div className="row">{this.state.mappedCarData}</div> */}
        <div className="row">{this.state.mappedCarData.map(this.mapCars)}</div>
      </div>
    );
  }
}
export default Cars;
