import React from "react";
import Car from "./Car";

class Cars extends React.Component
{
    // constructor(props){
    //     super(props)
    //       this.state = {
        
    state = {
        cars : [
            {
                id: 1,
                make: "Kia",
                model: "Sorento",
                year: 2020
            },
            {
                id: 2,
                make: "Kia",
                model: "Optima",
                year: 2019
            },
            {
                id: 3,
                make: "Tesla",
                model: "Model 3",
                year: 2021
            },
            {
                id: 4,
                make: "Honda",
                model: "Civic",
                year: 2019
            },
            {
                id: 5,
                make: "Honda",
                model: "Accord",
                year: 2018
            },
            {
                id: 6,
                make: "Volkswagen",
                model: "Jetta",
                year: 2021
            },
            {
                id: 7,
                make: "Toyota",
                model: "Camry",
                year: 2021
            },
            {
                id: 8,
                make: "Ford",
                model: "Mustang",
                year: 2019
            },
            {
                id: 9,
                make: "Ford",
                model: "F-150",
                year: 2019
            },
            {
                id: 10,
                make: "Toyota",
                model: "Camry",
                year: 2020
            },
            {
                id: 11,
                make: "Ford",
                model: "F-150",
                year: 2021
            }
        ]
        , carsVisible : true
        // , value : 2019
    }  

    // this.handleChange = this.handleChange.bind(this);
    //}

    //using react.js, had to use bind and constructor function in order to make the select tag (dropdown box to get the value of the chosen options)
    //didn't read all the instrunctions first. realized i had to use the filter function in select after i got the errors that i get a read only field

    // handleChange(e){
    //     this.setState({value: e.target.value});
    // }


    mapCar = (car) => 
    {
        console.log(car);
        return (
            <React.Fragment key={`Car-${car.id}`}>
                <Car oneCar={car}/>
            </React.Fragment>
        ); 
    }

    onHideAllCarsClicked = () =>
    {
        console.log("Hide Cars button was clicked");
        this.setState({ carsVisible : false });
    }

    onShowAllCarsClicked = () =>
    {
        console.log("Show Cars button was clicked");
        this.setState({ carsVisible : true });
    }

    //failed attempt realized i was approaching filter wrong
    filterCar = (car) =>{
        console.log("filter car for year");
        return car.year === 2019
    }
    //was able to get the cars to filter, for the year
    //and map it
    //now i just have to put it in a select tag for the dropdown box

    filteredCar = (selectedFilteredCar) =>{
        console.log("Selected Car Year", selectedFilteredCar)
        return selectedFilteredCar.year;
    }

    render(){
        return (
            <React.Fragment>
                {/* <h1>All Cars</h1> */}
                {/* {this.state.cars.map(this.mapCar)} */}

                { this.state.carsVisible ?
                    <div>
                        <h1>All Cars</h1>
                        {this.state.cars.map(this.mapCar)}
                        <button className="btn btn-warning" onClick={this.onHideAllCarsClicked}>Hide All Cars</button>
                    </div>
                    : 
                    <div>
                        <h1>All Cars Are Hidden</h1>
                        <button className="btn btn-primary" onClick={this.onShowAllCarsClicked}>Show All Cars</button>
                    </div> 
                }

                {/* <select value={this.state.value} onchange={this.handleChange}>
                        <option value={2019}>{this.state.cars.year}</option>
                        <option value={2020}>{this.state.cars.year}</option>
                        <option value={2021}>{this.state.cars.year}</option>
                    </select>  */}

                {/* trying to figure out how to put it in the select box, realized i should code small to make sure it works at all before trying to put it in the select tag */}

                {/* <select>
                    <option value="2019">{this.cars.filter(carYear => carYear === 2019).map(filteredCarYear => filteredCarYear.year)}</option>

                </select>  */}

                {/* {this.state.cars.filter(carYear => carYear === 2019).map(filteredCarYear => filteredCarYear.year)} */}

                {/* also, i should not be using inline funcitons here
                 must figure out how to implement the dropdown select tag with the new filtered array of cars
                 may be overthinking it but i feel like a ternary operator,some kind of conditonal statement would work here
                 , im rendering it wrong, because im rendering the array in the dropdown. 
                 i need to render the array on the page if the dropdown option is selected
                 so, i do need a value in state to use in a conditional statement, but ternary operators only use two options?
                 */}

                {/* coding small to make sure i can get it to render
                 {this.state.cars.filter(this.filterCar).map(this.filteredCar)} 
                */}

                <select>
                    <option value="2019">{this.state.cars.filter(this.filterCar).map(this.filteredCar)}</option>
                </select>

                {}
            
            </React.Fragment>
        );
    }

}

export default Cars;


//using reactjs.org to figure out select tag in the forms page of website
//the select tag should have option tags inside kind of like a list tag in html
//the option tags in the example have values. 
//select attribute in the options maked it the set selection that can be changed in the dropdown box

/* <select>
<option value={this.state.cars.year}>{this.state.cars.year}</option>
</select> */

//this is html format, need to set value for select and an onChange funciton
//however, in their example, they use bind and a constructor function and are also using a form