import React from "react";
import SingleCar from "./SingleCar"; 

class Cars extends React.Component{ 

  // constructor(props) {
  //   super(props);
  //   this.state = {
    state = {
        cars: [{    
            make: "Kia",
            model: "Sorento",
            year: 2020,
            id: 1857205
        },
        {
            make: "Kia",
            model: "Optima",
            year: 2019,
            id: 1986712
        },
        {
            make: "Tesla",
            model: "Model 3",
            year: 2021,
            id: 1068385
        },
        {
            make: "Honda",
            model: "Civic",
            year: 2019,
            id: 1967023
        },
        {
            make: "Honda",
            model: "Accord",
            year: 2018,
            id: 1078373
        },
        {
            make: "Volkswagen",
            model: "Jetta",
            year: 2021,
            id: 1298403
        },
        {
            make: "Toyota",
            model: "Camry",
            year: 2021,
            id: 1078374
        },
        {
            make: "Ford",
            model: "Mustang",
            year: 2019,
            id: 1756285
        },
        {
            make: "Ford",
            model: "F-150",
            year: 2019,
            id: 1856382
        },
        {
            make: "Toyota",
            model: "Camry",
            year: 2020,
            id: 1239682
        },
        {
            make: "Ford",
            model: "F-150",
            year: 2021,
            id: 1359720,
        }]
    }


  // Got rid of axios call and got it to display with method Hector was asking for  
  // Passed in random id prop cus I was getting an error in the console required "key" for each child
  // Still was unable to get functionality btns working


    componentDidMount(){ 
            this.setState((preState)=>{ 
                return {mappedCars: preState.cars.map(this.mapAllCars)}         
        });
    }
    
   
    mapAllCars = (oneCar) => { 
        return (
            <React.Fragment key={oneCar.id}>
                <SingleCar 
                    car={oneCar} 
                ></SingleCar>
            </React.Fragment>
        );
    };
    onShowCarsButtonClick = (e) =>{ //callback function
        // stuck on adding functionality to show/hide button

    };
  
    

  render() {
      return  <div>
        <button
        type="button" 
        className="btn btn-primary"
        style={{float: 'left'}}
        onClick={this.onShowCarsButtonClick}
        > 
         Show Cars 
        </button>



      {/* <div>
        car.filter(car => car.year === 1999 .map(filteredCars) => (
          show(car.year)
        )

        Not sure if I should be implementing If statement.
      </div> */}

      

        
        <select className="form-select">
            <option selected>Show All</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
        </select>
    
      
        <div className="container">
                    <div className="row">
                        <div className="col-9"></div>
                            {this.state.mappedCars}
                   </div>
                </div>
        </div>
    
       
  }
}

export default Cars;