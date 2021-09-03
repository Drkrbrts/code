import React from "react"
import RenderCar from "./RenderCar";

class Cars extends React.Component{

    state = {
        cars:     [
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
        isShowPressed: false,
        year: 0
    }

    componentDidMount(){
        console.log("componentDidMount -> Cars");
        this.setState(prevState => {
            let cars = [...prevState.cars]
            let mappedCars = cars.map(this.mapCars)
            return {cars, mappedCars}
        })
    }

    mapCars = (car) => {
        return(
            <React.Fragment key={`${car.year}:${car.make}-${car.model}`}>
                <RenderCar
                    car={car}
                />
            </React.Fragment>
        )
    }

    filterCars = (car) => {
        let result = false;
        if(this.state.year === 0) return result = true
        if(car.year === this.state.year) return result = true;
        return result
    }

    onFormFieldChange = (e) => {
        e.preventDefault();
        let currentTarget = e.currentTarget
        let newValue = currentTarget.value

        this.setState((prevState) => {
            let year = {...prevState.year}
            let filteredCars = this.state.cars.filter(this.filterCars)
            let mappedCars = filteredCars.map(this.mapCars)
            year = parseInt(newValue) || 0
            return {year, mappedCars}
        })
    }

    onShowCarsClick = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            return{
                isShowPressed: !prevState.isShowPressed
            }
        })
    }

    shouldRender = (show) => {
        if(show){
            return (this.state.mappedCars)
        }
    }

    render(){
        const isShown = this.state.isShowPressed;

        return(
            <React.Fragment>
            <div className="row m-3">
                <div className="col-lg-3">
                    <button
                        className="btn btn-outline-primary me-3"
                        onClick={this.onShowCarsClick}
                    >
                        Show Cars
                    </button>
                    <select
                        name="year"
                        onChange={this.onFormFieldChange}
                    >
                        <option>Show All</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                    </select>
                </div>
            </div>
            <div className="row">
                {this.shouldRender(isShown)}
            </div>
            </React.Fragment>
            
        )
    }
}

export default Cars