import React  from "react";




class CarsMap extends React.Component{


state ={
  cars:  [
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
};




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
      //store the comparison values in array
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])

      .map(e => arr[e]);

    return unique;
  }


componentDidMount() {
    this.setState({ cars:cars});
  }



mapCar = (cars) => {

render(){

const uniqueCar = this.getUnique(this.state.cars, "year");

const cars = this.state.cars;
const car = this.state.car;

const filterDropdown = courses.filter(function(result) {
  return result.tag === course;
});


return(
 
       
<div id = "results" className="search-results">
    <div className="card-body">
               <h5 className="card-title">{cars.make}</h5>
               <h5 className="card-text">{cars.model}</h5>
               <h5 className="card-text">{cars.year}</h5>
               
    </div>
    <div id="container"> </div>
    < form onSubmit={this.handleSubmitCourse}>
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
</div>

  

);

  





Search = React.createClass({
    getInitialState: function() {
        return { cars: false };
    },
    onClick: function() {
        this.setState({ cars: true });
    },
    render: function() {
        return (
            
            <button>
                <input type="submit" value="Search" onClick={this.onClick} />
                { this.state.showResults ? <CarsMap /> : null }
            </button>
        );
    }
});




};


};




}










export default CarsMap;