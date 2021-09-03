import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CarsForm from "./CarsForm";

class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {
                    make: "Kia",
                    model: "Sorento",
                    year: 2020,
                    id: 1
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
              mappedCars: [
                  
              ]
            
        };
    } 

    componentDidMount(){
        this.renderByYear()
        console.log(this.state.cars)
    }


    renderCars = () => {
        this.setState(prevState => {
            return{
                ...prevState,
                mappedCars: prevState.cars.map(this.mapCars)
            }
        })
    }
        mapCars = (car) => (
            <CarsForm car={car}
             />
        )
 
renderByYear = () => {
    this.setState(prevState => {
        return{
            ...prevState,
            carYear: prevState.cars.filter(this.findByYear)
        }
    })
}

filterYear = (year) =>
(
    <CarsForm year={year} />
)

findByYear = () => {
    let result = false;
    if (this.props.cars === 2021){
        return true
    }
    return result;
}
    render(){
        return(
            
        <React.Fragment>

<select className="custom-select">
  <option selected>Open this select menu</option>
  <option value={1}
   onSelect={this.state.carYear}

>2021
  </option>
  <option value={2}>2020</option>
  <option value={3}>2019</option>
</select>
<div>{this.state.carYear}</div>
            <input className="btn btn-info"
                 type="submit"
                value="Show All Cars"
                onClick={this.renderCars}  
                  ></input>
                  <div>{this.state.mappedCars}</div>
                  
                  
        </React.Fragment>

        // not sure how to hide the cars with the same button, will come back to this
        // if I have time at the end of the assesment. 
        )
    }
} 

export default Cars 