import React  from "react";
import SingleCar from "./OneCar";




class CarsMap extends React.Component{

constructor(props){
super(props);
this.state ={
  carsArr:  [
        {
            make: "Kia",
            model: "Sorento",
            year: 2020
        },
        {
            make: "Kia",
            model: "Optima",
            year: 2019
        },
        {
            make: "Tesla",
            model: "Model 3",
            year: 2021
        },
        {
            make: "Honda",
            model: "Civic",
            year: 2019
        },
        {
            make: "Honda",
            model: "Accord",
            year: 2018
        },
        {
            make: "Volkswagen",
            model: "Jetta",
            year: 2021
        },
        {
            make: "Toyota",
            model: "Camry",
            year: 2021
        },
        {
            make: "Ford",
            model: "Mustang",
            year: 2019
        },
        {
            make: "Ford",
            model: "F-150",
            year: 2019
        },
        {
            make: "Toyota",
            model: "Camry",
            year: 2020
        },
        {
            make: "Ford",
            model: "F-150",
            year: 2021
        }
    ],
    cars: [],
      car: ""
};

this.handleSubmitCar = this.handleSubmitCar.bind(this);

}




  handleSubmitCar(event) {
    alert("Your selected value is: " + this.state.car);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleChangeCar = event => {
    this.setState({ car: event.target.value });
  };






getUnique(arr, comp) {
    const unique = arr
     
      .map(e => e[comp])

   
      .map((e, i, final) => final.indexOf(e) === i && i)

     
      .filter(e => arr[e])

      .map(e => arr[e]);

    return unique;
  }


componentDidMount() {
  const carsArr = [
    {
        make: "Kia",
        model: "Sorento",
        year: 2020
    },
    {
        make: "Kia",
        model: "Optima",
        year: 2019
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2021
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2019
    },
    {
        make: "Honda",
        model: "Accord",
        year: 2018
    },
    {
        make: "Volkswagen",
        model: "Jetta",
        year: 2021
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2021
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2019
    },
    {
        make: "Ford",
        model: "F-150",
        year: 2019
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2020
    },
    {
        make: "Ford",
        model: "F-150",
        year: 2021
    }
]



    this.setState({ carsArr:carsArr});




  }


  mapCars = (singleCar) => {
    return (
      <React.Fragment key={singleCar.year + "-" + singleCar.model}>
        <SingleCar car={singleCar} {...this.props} />
      </React.Fragment>
    );
  };

  toggleCars = () => {
    this.setState((prevState) => {
      return { showCars: !prevState.showCars };
    });
  };


  clearFilter = () => {
    this.setState((prevState) => {
      let newState = { ...this.prevState };
      newState.mappedCars = this.state.carsArray.map(this.mapCars);
      newState.filtering = false;
      return newState;
    });
  };





render(){

  

  
  

  const uniqueCar = this.getUnique(this.state.carsArr, "year");

  const cars = this.state.cars;
  const car = this.state.car;

  const filterDropdown = cars.filter(function(result) {
    return result.tag === car;
  });



return (
<React.Fragment>

 < form onSubmit={this.handleSubmitCar}>
<br />
<br />
<label>
  Looping through cars
  <select
    value={this.state.cars}
    onChange={this.handleChangeCar}
  >
    {uniqueCar.map(car => (
      <option key={car.name} value={car.year}>
        {car.year}
      </option>
    ))}
  </select>
</label>
<input type="submit" value="Submit" />
<div>
  {filterDropdown.map(cars => (
    <div key={cars.id} style={{ margin: "10px" }}>
      {cars.cars}
      <br />
    </div>
  ))}
</div>
</form>



</React.Fragment>


);







  }



}




export default CarsMap;