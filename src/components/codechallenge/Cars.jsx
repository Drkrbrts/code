import React from "react"
import SingleCar from "./SingleCar"

class Cars extends React.Component {
    state = {
        show: false
        ,formData:{
            selector: "0"
        }
        ,cars: [
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


    componentDidMount = () =>{
        this.renderAllCars();
    }

    renderAllCars = () =>{
        let selectedCars = this.state.cars;
    
        this.setState(() => {
        return {
            allMappedCars: selectedCars.map(this.mapCars)
        }
        })
        
    }

    renderFilteredCars = () =>{
        let selectedFilteredCars = this.state.cars.filter(this.filterCars)
    
        this.setState(() => {
        return {
            mappedCars: selectedFilteredCars.map(this.mapCars)
        }
        })
        
    }

    mapCars = (oneCar) => {
        return (
            <React.Fragment key={`car${oneCar.make}${oneCar.model}${oneCar.year}`}> 
                      
            <SingleCar
            myCar={oneCar}
            ></SingleCar>
            
            </React.Fragment>
        )        
    }

    filterCars = (car) =>{
        let result = false;

        if (car.year === Number(this.state.formData.selector))
        {
            return result = true;
        }

        return result;
    }

    onSHowHandler = (e) => {
        e.preventDefault();
        console.log("Show clicked")
        //this.setState({show: false})

        this.setState(() => {
            let show = {...this.state.show}; 
            show = false; 
            return {show};
        })

        this.renderFilteredCars();
        
    }
    onHideHandler = (e) => {
        e.preventDefault();
        console.log("Hide clicked")
        //this.setState({show: true})

        this.setState(() => {
            let show = {...this.state.show}; 
            show = true; 
            return {show};
        })
    }
    
    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget;    
        let newValue = currentTarget.value;              

        let inputName = currentTarget.name;  
 
        this.setState(() => {
            let formData = {...this.state.formData}; 
            formData[inputName] = newValue; 
            return { formData };
        })

    }

    componentDidUpdate(prevProps,prevState) {

        if (this.state.formData.selector !== prevState.formData.selector) {
            this.renderFilteredCars();
        }
      }

    render() {

        return <React.Fragment>
           
            <div className="container">
            <div className="col-md-12">
            <div className=" justify-content-center">

                            <select 
                            name="selector" 
                            className="selector form-select" 
                            aria-label="Default select example"
                            onChange={this.onFormFieldChanged} 
                            value={this.state.formData.selector}>

                            <option value="0">All Cars</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            </select>

                            {this.state.show ?    
                                <button
                                onClick={this.onSHowHandler}
                                type="button" 
                                className="btn btn-warning">
                                    Hide Cars
                                </button>
                                :
                                <button
                                onClick={this.onHideHandler}
                                type="button" 
                                className="btn btn-primary">
                                    Show Cars
                                </button>
                            }
                </div>
                <div className="row d-flex justify-content-center "> 

                {this.state.formData.selector === "0" ? this.state.show ? this.state.allMappedCars : "" : this.state.show ? this.state.mappedCars : ""}

                </div>
            </div>
            </div>
      
        </React.Fragment>

    }
};

export default Cars;