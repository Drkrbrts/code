import React from "react";
import MapCar from "./MapCar";
// import MapCar from "./MapCar";

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      mappedCars: [],
      year: "",
    };
  }

  componentDidMount() {
    this.setState((prevState) => {
      return { ...prevState, mappedCars: prevState.cars.map(this.MapCar) };
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        ...prevState,
        mappedCars: prevState.cars
          .filter((car) => car.year === Number(prevState.year))
          .map(this.MapCar),
      };
    });
  }

  handleChange(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        year: e.target.value,
      };
    });
  }

  MapCar = (props) => {
    return (
      // <React.Fragment key={`Cars-${props.id}`}>
      // <div className="card col-md-3 m-1">
      //   <div className="card-body">
      //     <h5 className="card-title">Make: {props.make}</h5>
      //     <h5 className="card-text">Model: {props.model}</h5>
      //     <h5 className="card-text">Year: {props.year}</h5>
      //   </div>
      // </div>
      <MapCar {...props} />
    );
  };

  //   render() {
  //     return <React.Fragment> {this.state.mappedCars} </React.Fragment>;
  //   }
  // }

  render() {
    return (
      <div>
        <form action="/action_page.php" onSubmit={this.handleSubmit}>
          <label for="year">Choose a year:</label>
          <select name="year" id="year" onChange={this.handleChange}>
            <option value="Show All">Show All</option>
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
