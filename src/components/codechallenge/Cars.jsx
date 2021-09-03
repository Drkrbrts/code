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


            // this.setState({
            //     filterCar: this.state.mappedCars
            // })
    }


    // handleCarFilt = year =>{
    //     const filterCar = [];
    //     console.log("this works")
    //     if( year === "All"){
    //         filterCar = this.state.cars;
    //     }
    //     else{
    //         filterCar = this.state.cars.filter(car.year ===cars);
    //     }
    // };

    // var ShowHide = 

    // constructor(){}

    // handleFilter = year => {
    //     let mappedCars = [];
    //     if (year === "All"){
    //         mappedCars = this.state.cars;
    //     }
    //     else{
    //         mappedCars = this.state.cars.filter(cars => cars.year === year)
    //     }
    // };

    // function filterCar() {
    //     return (
    //         <
    //     )
    // }




    mapCars = (oneCar) => { 
        return (
            <React.Fragment key={oneCar.id}>
                <SingleCar 
                    car={oneCar} 
                   
                ></SingleCar>
        
            </React.Fragment>
        );
    };

    // handle2021(){
    //     console.log("handle2021 works")
    // }
   
    // handle2020(){

    // }

    // handle2019(){

    // }

    // change function () {
    //     this.setState({value: this.cars.value
    //     });
    // }

    // constructor(){
    //     super();
    //     this.state ={
    //         showHide: false}
        // this.hideComponent = this.hideComponent.bind(this);
    // }

    // hideComponent(mappedCars){
    //     switch (mappedCars){
    //         case "showHide": this.setState
    //     }
    // }

    // filterCars = () =>{

    //     return();
    // }

    // state = {isHidden: true}
    // onButtonShowButtonClick = () => {this.setState((prevState)=>({isHidden: !prevState.isHidden}))};


    onButtonShowButtonClick = (e) =>{
        e.preventDefault();
        console.log("this button works")


    };



    render() {
        return(
            

            <div className="col-md-12 p-5">
              
              <div className="custom-select">
                <select onChange={this.change} value={this.state.value}>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
                </div>
                
                {/* <div>
                     <div onClick={() => this.onClick()}>
                    Show or Hide</div>
                {
                this.state.childVisible ? <Cars/> : null
                    }
                </div> */}



                <button className="btn btn-primary" onClick={this.onButtonShowButtonClick()}>Show Cars</button>
                {/* <button className="btn btn-primary" onClick={() => this.hideComponent("showHide")}>Show Cars</button> */}

                <div className="row"> 
                           {this.state.mappedCars}
                </div>



            </div>

            
        );
    };
    }






export default Cars;