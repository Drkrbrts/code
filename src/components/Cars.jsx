import { data } from "jquery";
import React from "react";
import CarCard from "./CarCard";

class Cars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        { id: 1, make: "Kia", model: "Sorento", year: 2020 },
        { id: 10, make: "Kia", model: "Optima", year: 2019 },
        { id: 8, make: "Tesla", model: "Model 3", year: 2021 },
        { id: 2, make: "Honda", model: "Civic", year: 2019 },
        { id: 4, make: "Honda", model: "Accord", year: 2018 },
        { id: 11, make: "Volkswagen", model: "Jetta", year: 2021 },
        { id: 5, make: "Toyota", model: "Camry", year: 2021 },
        { id: 9, make: "Ford", model: "Mustang", year: 2019 },
        { id: 6, make: "Ford", model: "F-150", year: 2019 },
        { id: 3, make: "Toyota", model: "Camry", year: 2020 },
        { id: 7, make: "Ford", model: "F-150", year: 2021 },
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
        //filterCars: prevState.cars.filter(this.filterCars),
      };
    });
  };

  //map function
  mapCar = (cars) => <CarCard cars={cars} key={cars.id} />;

  //filter function
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  };
  
  render() {
      /*let year= this.state.cars.filter((year) =>{
          if()
      })*/
    

    return (
      <>
          <div className="container pt-5">
          <label htmlFor="cars-years">Choose a Year:</label>
          <select name="cars-years" value={this.state.cars.year} onChange={this.changeHandler}> 
            <option value="">2018</option>
            <option value="">2019</option>
            <option value="">2020</option>
            <option value="">2021</option>
          </select>
          </div>
         
          
        
        <div className="row">{this.state.mappedCars}

        {this.state.show ? 
          <button className="btn btn-success" onClick={this.handleHide}>
            Show
          </button>
         : 
          <h3> False </h3>
        }
        </div>
      </>
    );
  }
}
export default Cars;
