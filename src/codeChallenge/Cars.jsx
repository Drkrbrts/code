import React from "react";

class Cars extends React.Component {
    state = { cars: [
        
        {
            make: "Kia",
            model: "Sorento",
            year: 2020,
            id: 1
        },
        {
            make: "Kia",
            model: "Optima",
            year: 2019,
            id: 2
        },
        {
            make: "Tesla",
            model: "Model 3",
            year: 2021,
            id: 3
        },
        {
            make: "Honda",
            model: "Civic",
            year: 2019,
            id: 4
        },
        {
            make: "Honda",
            model: "Accord",
            year: 2018,
            id: 5
        },
        {
            make: "Volkswagen",
            model: "Jetta",
            year: 2021,
            id: 6
        },
        {
            make: "Toyota",
            model: "Camry",
            year: 2021,
            id: 7
        },
        {
            make: "Ford",
            model: "Mustang",
            year: 2019,
            id: 8
        },
        {
            make: "Ford",
            model: "F-150",
            year: 2019,
            id: 9
        },
        {
            make: "Toyota",
            model: "Camry",
            year: 2020,
            id: 10
        },
        {
            make: "Ford",
            model: "F-150",
            year: 2021,
            id: 11
        }
    
    ]}


    componenetDidMount = () => {
    }

    onClickHandler = () => {
        console.log("clicked");
    }

    updateCare = (e) => {
        this.setState((prevState) => {
            return {...prevState}
        })
    }

    mapCars = (newCar) => {

        return (
            <div className="card col-md-3 m-1" key={newCar.id}>
                <div className="card-body">
                    <h5 className="card-title">{newCar.make}</h5>
                    <h5 className="card-text">{newCar.model}</h5>
                    <h5 className="card-text">{newCar.year}</h5>
                </div>
            </div>
        )
    }

    filterCars = (carFilter) => {
        if (this.state.cars.year === 2019 || 2020 || 2021) {
            return true
        }
        return false
    }





    render () {

        return <React.Fragment>
            <div>
                <button type="button" className="btn btn-primary btn-outline-light" onClick={this.onClickHandler}>
                    Show Cars
                </button>
                <div className="form-group">
                <select className="form-control" id="exampleFormControlSelect1"onChange={this.filterCars.bind(this)}>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                </select>
                </div>
            </div>
            <div className="row">
                {this.state.cars.map(this.mapCars)}
            </div>
            
        </React.Fragment>

            
    }
}

export default Cars