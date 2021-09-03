import React from "react";
import SingleCar from "./SingleCar"; 


class Cars extends React.Component{ 

    state = {
        cars: [{
            make: "Kia",
            model: "Sorento",
            year: 2020,
            id:123
        },
        {
            make: "Kia",
            model: "Optima",
            year: 2019,
            id:234
        },
        {
            make: "Tesla",
            model: "Model 3",
            year: 2021,
            id:345
        },
        {
            make: "Honda",
            model: "Civic",
            year: 2019,
            id:456
        },
        {
            make: "Honda",
            model: "Accord",
            year: 2018,
            id:567
        },
        {
            make: "Volkswagen",
            model: "Jetta",
            year: 2021,
            id:678
        },
        {
            make: "Toyota",
            model: "Camry",
            year: 2021,
            id:789
        },
        {
            make: "Ford",
            model: "Mustang",
            year: 2019,
            id:101
        },
        {
            make: "Ford",
            model: "F-150",
            year: 2019,
            id:112
        },
        {
            make: "Toyota",
            model: "Camry",
            year: 2020,
            id:334
        },
        {
            make: "Ford",
            model: "F-150",
            year: 2021,
            id: 555,
        }]
    }

    

    componentDidMount(){ 
            this.setState((preState)=>{ 
                return {mappedCars: preState.cars.map(this.mapCars)}         
        });
    }

    // onCarClickShow = (myCar) =>{
    //     console.log(myCar)
    // };



    mapCars = (oneCar) => { 
        return (
            <React.Fragment key={oneCar.id}>
                <SingleCar 
                    car={oneCar} 
                   
                    // onClick={this.onCarClickShow}   
                ></SingleCar>
        
            </React.Fragment>
        );
    };

    onButtonShowButtonClick = (e) =>{
        e.preventDefault();
        console.log("this button works")
    };


    render() {
        return(
            

            <div className="col-md-12 p-5">
              
              <div class="custom-select">
                <select>
                    <option value="0">2021</option>
                    <option value="1">2020</option>
                    <option value="2">2019</option>
                </select>
                </div>
                
                <button className="btn btn-primary" onClick={this.onButtonShowButtonClick}>Show Cars</button>

                <div className="row"> 
                           {this.state.mappedCars}
                </div>



            </div>

            
        );
    };
    }






export default Cars;