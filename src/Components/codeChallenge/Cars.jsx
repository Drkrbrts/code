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

    // componentDidMount(){
    //     this.renderByYear()
    //     console.log(this.state.cars)
    // }


    renderCars = () => {
        this.setState(prevState => {
            return{
                ...prevState,
                mappedCars: prevState.cars.map(this.mapCars)
            }
        })
    }



    carFilterOne = () => {
        let carsOne = [...this.state.cars]
        let filteredCarsOne = carsOne.filter((item) => {
            return item.year === 2021
        });
    
    
    
        this.setState(prevState => {
            return {
                ...prevState,
                mappedCars: filteredCarsOne.map(this.mapCars),
            }
        });
    }
    carFilterTwo = () => {
        let carsTwo = [...this.state.cars] 
        let filteredCarsTwo = carsTwo.filter((item) => {
            return item.year === 2020
        });
        
    
    
        this.setState(prevState => {
            return {
                ...prevState,
                mappedCars: filteredCarsTwo.map(this.mapCars),
            }
        });
    }
    carFilterThree = () => {
        let carsThree = [...this.state.cars] 
        let filteredCarsThree = carsThree.filter((item) => {
            return item.year === 2019
        });
        
    
    
        this.setState(prevState => {
            return {
                ...prevState,
                mappedCars: filteredCarsThree.map(this.mapCars),
            }
        });
    }


    
        mapCars = (car) => (
            <CarsForm car={car}
             />
        )
 

        // filterYear = (year) =>
        // (
        //     <CarsForm year={year} />
        // )


    render(){
        return(
            
        <React.Fragment>
            {/* {this.state.mappedCars.length > 0
            ? this.state.mappedCars
            : "No Records Found"} */}

            <select className="custom-select">
                <option selected>Open this select menu</option>
                <option value={1}
                >2021
                </option>
                <option value={2}>2020</option>
                <option value={3}>2019</option>
                </select>
                <input className="btn btn-info"
                 type="submit"
                value="Filtered 2021 Cars"
                onClick={this.carFilterOne}  
                  ></input>
                <div>{this.state.filteredCarsOne}</div>
                <input className="btn btn-info"
                 type="submit"
                value="Filtered 2020 Cars"
                onClick={this.carFilterTwo}  
                  ></input>
                <div>{this.state.filteredCarsTwo}</div>
                <input className="btn btn-info"
                 type="submit"
                value="Filtered 2019 Cars"
                onClick={this.carFilterThree}  
                  ></input>
                <div>{this.state.filteredCarsThree}</div>



            <input className="btn btn-info"
                 type="submit"
                value="Show All Cars"
                onClick={this.renderCars}  
                  ></input>
                  <div>{this.state.mappedCars}</div>
                  
                  
        </React.Fragment>

        )
    }
} 

export default Cars 