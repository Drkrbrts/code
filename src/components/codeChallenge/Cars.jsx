import React from "react";


class Cars extends React.Component {

    state = {
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

    mapCars = (car) => {
        return (
        <div className="card col-md-3 m-1">
            <div className="card-body">
                <h5 className="card-title">{car.make}</h5>
                <h5 className="card-text">{car.model}</h5>
                <h5 className="card-text">{car.year}</h5>
            </div>
        </div>
        );
    };

    onShowCarsClicked () {
        var view = document.getElementById("carlist");
        var carButton = document.getElementById("carButton");

        if (view.style.display === "none") {
            view.style.display = "flex";
            carButton.innerHTML = "Hide cars";
        } else { 
            view.style.display = "none";
            carButton.innerHTML = "Show cars";
        }
    };

    
      

    render() {
        return (
            <div className="col-md-12 p-5">
                <h1>Car Inventory</h1>
                <hr/>
                <div className="row" id="carlist">
                    {this.state.cars.map(this.mapCars)}
                </div>
                <div>
                <button type="button" className="btn btn-primary" onClick={this.onShowCarsClicked} id="carButton" >Show Cars</button>
                </div>
                <div>
                <select className="form-select" value={this.state.cars.year} onChange={this.onSelectChanged} name="year">
                    <option value="">Select Year</option>
                    <option value="1">2019</option>
                    <option value="2">2020</option>
                    <option value="3">2021</option>
                </select>
                </div>
            </div>
        );
    }
}

export default Cars;