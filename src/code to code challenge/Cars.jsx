import React from "react"
import CarShow from "./CarShow"
import Car2021 from "./Car2021"

class Cars extends React.Component{

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
        ],
        show: true
    }

//.................................................................................

    mapCar = (car) => 
    {
        return (
            <React.Fragment>
                <CarShow car = {car}/>
            </React.Fragment>
        )
    }

 //...............................................................................

    onShowCarClicked = () =>
    {
        this.setState({show: false})
    }

//.................................................................................

    onYear2021Clicked = () =>
    {
        var car2021 = this.state.cars.filter(this.year2021);

        this.setState( this.state.cars = car2021)

        console.log(this.state)

    }

//.................................................................................

    onYear2020Clicked = () =>
    {
        var car2020 = this.state.cars.filter(this.year2020);

        this.setState(this.state.cars = car2020)
        


    }

//...................................................................................

  onYear2019Clicked = () =>
  {
      var car2019 = this.state.cars.filter(this.year2019);

      this.setState(this.state.cars = car2019)

  }

//...................................................................................

    year2021 = (car) =>
    {
        var result = false;
        if(car.year === 2021)
        {
            result = true;
        }

        return result;
    }

    year2020 = (car) =>
    {
        var result = false;
        if(car.year === 2020)
        {
            result = true;
        }

        return result;
    }

    year2019 = (car) =>
    {
        var result = false;
        if(car.year === 2019)
        {
            result = true;
        }

        return result;
    }

//.....................................................................................................

    render()
    {

        return(
            <React.Fragment>
                <div className="col-md-3 m-1 p-2">

                    <button className="btn btn-primary m-2" onClick={this.onShowCarClicked}>Show Car</button> 
                    <button className="btn btn-primary m-2" onClick={this.onYear2021Clicked}>Year 2021</button>
                    <button className="btn btn-primary m-2" onClick={this.onYear2020Clicked}>Year 2020</button>
                    <button className="btn btn-primary m-2" onClick={this.onYear2019Clicked}>Year 2019</button>
                    
                </div>
                {this.state.show ? null : 
                    (<div>
                        <h1>Cars</h1>
                        {this.state.cars.map(this.mapCar)}
                    </div>)} 

                
                        
                    
                

                
                
            </React.Fragment>
        )
    }
}

export default Cars