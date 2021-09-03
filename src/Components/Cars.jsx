import React from "react";
// import Mapcars from "./Mapcars";

// <Mapcars></Mapcars>;

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
    };
  }
  // componentDidMount() {
  //   this.setState((preState) => {
  //     return { mappedCars: preState.cars.map(this.mapCar) };
  //   });
  // }
  render() {
    return (
      <div className="col-md-12 p-5">
        <form action="/action_page.php">
          <label for="year">Choose a year:</label>
          <select name="year" id="year">
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <h1>Cars</h1>
        <hr />
        <div className="row">{this.state.mappedCars}</div>
      </div>
    );
  }
}

export default Cars;
