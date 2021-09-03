import React from 'react'
import CardTemplate from './Cars/CardTemplate'

// http://localhost:3000/cars
// BONUS: Non React Version of a very similar exercise
// https://github.com/benjaminspak/get-render-brewery-api/blob/main/index.html

// @TODO show hide
// https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react

class Cars extends React.Component {
  state = {
    cars: [
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
  }



      
  showHideCarsClick = (e) => {
    e.preventDefault()
  }

  mapCar = (oneCar) => {
    return (
      <CardTemplate make={oneCar.make} model={oneCar.model} year={oneCar.year}></CardTemplate>
    )
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="col-md-12 p-5">
          <div className="header-container">
            <h1>Cars</h1>
            <button className="btn btn-primary btn" onClick={this.showHideCarsClick}>Show/Hide Cars</button>
            <hr />
          </div>
          <div className="car-cards-container">
            <div className="row">
              {this.state.cars.map(this.mapCar)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cars

// - Create a button called Show Cars that upon clicking on it will hide or show the list of cars.

// Filtering
//     Create a < select > tag (dropdown box) with options 2021, 2020, 2019 that upon selecting any of these options it should filter the array and only display cars which the year matches the option selected.
//     Once you are finished or time is up please execute sabio -sb in the root folder to share your work.