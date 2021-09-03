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
    allCars: true,
  };

  carRender = (myCars) => <SingleCar key={myCars.id} theCars={myCars} />;

  onShowAllClick = () => {
    this.setState({ allCars: !this.state.allCars });
  };

  render() {
    return (
      <>
        <div className="container">
          {this.state.allCars ? (
            <button className="btn btn-primary" onClick={this.onShowAllClick}>
              Show 2021 Cars
            </button>
          ) : (
            <div>
              <button className="btn btn-primary" onClick={this.onShowAllClick}>
                Hide 2021 Cars
              </button>
              {this.state.cars
                .filter((carYear) => carYear.year === 2021)
                .map(this.carRender)}
            </div>
          )}

          <div className="container">
            {this.state.allCars ? (
              <button className="btn btn-primary" onClick={this.onShowAllClick}>
                Show 2020 Cars
              </button>
            ) : (
              <div>
                <button
                  className="btn btn-primary"
                  onClick={this.onShowAllClick}
                >
                  Hide 2020 Cars
                </button>
                {this.state.cars
                  .filter((carYear) => carYear.year === 2020)
                  .map(this.carRender)}
              </div>
            )}

            <div className="container">
              {this.state.allCars ? (
                <button
                  className="btn btn-primary"
                  onClick={this.onShowAllClick}
                >
                  Show 2019 Cars
                </button>
              ) : (
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={this.onShowAllClick}
                  >
                    Hide 2019 Cars
                  </button>
                  {this.state.cars
                    .filter((carYear) => carYear.year === 2019)
                    .map(this.carRender)}
                </div>
              )}

              {this.state.allCars ? (
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={this.onShowAllClick}
                  >
                    Show All
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={this.onShowAllClick}
                  >
                    Hide
                  </button>
                  {this.state.cars.map(this.carRender)}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Cars;
