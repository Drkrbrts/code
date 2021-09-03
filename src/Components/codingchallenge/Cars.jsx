import { div } from 'prelude-ls';
import React from 'react';
import Car from './Car'


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
        ],
        mappedCars: [],
        show: false,
        selectYear: null
    }

    mapCars = (car, index) => {
        return (
            <Car
                key={`Car - ${index}`}
                car={car}
            />
        )
    }

    showCars = () => {
        this.setState(prevState => ({
            show: !prevState.show,
            mappedCars: this.state.cars.map(this.mapCars)
        }))
    }

    filterbyYear = (car) => {
        return car.props.car.year === Number(this.state.selectYear)
    }


    onSelect = (e) => {
        this.setState(() => ({
            selectYear: e.target.value,
            mappedCars: this.state.cars.map(this.mapCars).filter(this.filterbyYear),
            show: true
        }))
    }

    render() {
        const cars = this.state.mappedCars
        return (
            <React.Fragment>
                <div className="row m-2">
                    <button
                        className="col-2 btn btn-primary"
                        type="button"
                        onClick={this.showCars}
                    >Show Cars
                    </button>
                    <div className="col-2">
                        <select className="form-select" onChange={this.onSelect}>
                            <option value="">Pick a year</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                        </select>
                    </div>
                </div>
                {this.state.show
                    ? <div className="row">{cars}</div>
                    : <div></div>
                }
            </React.Fragment>
        )
    }
}
export default Cars;