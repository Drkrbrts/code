import React from "react";

class cars extends React.Component{
    state= {
        cars:[
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
    ]}
    // renderCars = () =>{
    //     this.setState(prevState =>{
    //         return{...prevState, mappedCars: prevState.cars.map(this.mapCars)}
    //     })
    // }
    mapCars = (Car) =>{
        return <div key={`cars-${Car.model}+${Car.year}`} className="card col-md-3 m-1">
        <div className="card-body">
            <h5 className="card-title">{Car.make}</h5>
            <h5 className="card-text">{Car.model}</h5>
            <h5 className="card-text">{Car.year}</h5>
        </div>
    </div>

    }
    
      handleChange = () =>{
        this.state.cars.map(this.mapCars).filter(this.filterCars)


      }

    
 
    filterCars = (Car) =>{
        
      
        var result = false
        if(Car.value === this.state.cars.year ){
            result = true
        }
        return result
    }
   
    render(){
        return(
            
                <body>
                <form>
                <select>
                <option value={this.state.cars.year} name="2021" onChange={this.handleChange}>2021</option>
                <option value={this.state.cars.year} name="2020"onChange={this.handleChange}>2020</option>
                <option value={this.state.cars.year} name="2019"onChange={this.handleChange}>2019</option>
                </select>
                </form>
                <div className = "col">
                <div className="row">
                {this.state.cars.map(this.mapCars)}
                


                </div>
                </div>

                </body>
               


                
                
                
            
        )
    }
}
export default cars