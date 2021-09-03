import React from "react";
import CarTemplate from "./CarTemplate";
import debug from "sabio-debug";


const _logger = debug.extend("Car");

class Cars extends React.Component
{

    state = {
        carArray: [
            {
                make: "Kia",
                model: "Sorento",
                year: "2020"
            },
            {
                make: "Kia",
                model: "Optima",
                year: "2019"
            },
            {
                make: "Tesla",
                model: "Model 3",
                year: "2021"
            },
            {
                make: "Honda",
                model: "Civic",
                year: "2019"
            },
            {
                make: "Honda",
                model: "Accord",
                year: "2018"
            },
            {
                make: "Volkswagen",
                model: "Jetta",
                year: "2021"
            },
            {
                make: "Toyota",
                model: "Camry",
                year: "2021"
            },
            {
                make: "Ford",
                model: "Mustang",
                year: "2019"
            },
            {
                make: "Ford",
                model: "F-150",
                year: "2019"
            },
            {
                make: "Toyota",
                model: "Camry",
                year: "2020"
            },
            {
                make: "Ford",
                model: "F-150",
                year: "2021"
            }
        ],
        mappedCars: [],
        showCars: false
    };


    mapThisCar = (oneCar) =>
    {
        _logger("map firing")
        return <CarTemplate carInfo={oneCar} key={`${oneCar.year} ${oneCar.make} ${oneCar.model}`} />
    }

    toggleCars = () =>
    {
        let carArray = [...this.state.carArray];

        if (this.state.showCars)
        {
            this.setState(() =>
            {
                let showCars = { ...this.state.showCars };
                showCars = false;
                return { mappedCars: carArray.map(this.mapThisCar), showCars }
            })
        } else
        {
            this.setState(() =>
            {
                let showCars = { ...this.state.showCars };
                showCars = true;
                return { mappedCars: carArray.map(this.mapThisCar), showCars }
            })
        }
    };

    filterByYear = (e) =>
    {
        let yearSelected = e.currentTarget.value;

        this.setState(() =>
        {
            let carArray = [...this.state.carArray];
            let showCars = { ...this.state.showCars };
            showCars = true;
            let filteredArray = carArray.filter((car) =>
                car.year === yearSelected);
            _logger(filteredArray);
            return { mappedCars: filteredArray.map(this.mapThisCar), showCars }
        })
    }

    render()
    {

        return (
            <div>
                <select class="form-select" aria-label="Default select example" onChange={this.filterByYear}>
                    <option selected>Filter By Year:</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </select>
                <button
                    onClick={this.toggleCars}>
                    Show Cars
                </button>
                <div>
                    {this.state.showCars && this.state.mappedCars}
                </div>
            </div>
        )
    }
};

export default Cars;