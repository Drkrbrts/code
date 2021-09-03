import React from "react";
import CarCard from "./CarCard";

class Cars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        { id: 1,
          make: "Kia",
          model: "Sorento",
          year: 2020,
        },
        { id: 10,
          make: "Kia",
          model: "Optima",
          year: 2019,
        },
        { id: 8,
          make: "Tesla",
          model: "Model 3",
          year: 2021,
        },
        { id: 2,
          make: "Honda",
          model: "Civic",
          year: 2019,
        },
        { id: 4,
          make: "Honda",
          model: "Accord",
          year: 2018,
        },
        { id: 11,
          make: "Volkswagen",
          model: "Jetta",
          year: 2021,
        },
        { id: 5,
          make: "Toyota",
          model: "Camry",
          year: 2021,
        },
        { id: 9,
          make: "Ford",
          model: "Mustang",
          year: 2019,
        },
        { id: 6,
          make: "Ford",
          model: "F-150",
          year: 2019,
        },
        { id: 3,
          make: "Toyota",
          model: "Camry",
          year: 2020,
        },
        { id: 7,
          make: "Ford",
          model: "F-150",
          year: 2021,
        },
      ],
      mappedCars: [],
      filterCars: [],
    };
  }
  componentDidMount() {
    this.renderCars();
  }
  //render State
  renderCars = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        mappedCars: prevState.cars.map(this.mapCar),
        filterCars: prevState.cars.filter(this.filterCars)
      };
    });
  };

  //map function
  mapCar = (cars) => <CarCard cars={cars} key={cars.id} />;

  //filter function
  filterCars = (make, model, year) =><CarCard />;
  render() {
    return (
      <>
        
        <div className="row">{this.state.mappedCars}</div>
        <button type="button" class="btn btn-success">Show </button>
      </>
    );
  }
}
export default Cars;
