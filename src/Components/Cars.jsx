import React from "react";
import Car from "./Car";
import {Route} from "react-router-dom";

class Cars extends React.Component {

    state = {
        year: 1,
        render: false,
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
    }

    onFormFieldChanged = (e) => {
        
        
        let newValue = e.currentTarget.value;

        this.setState(() => {
            let year = {...this.state.year};
            
            year = newValue;
            return { year};
        })
    }


    

    toggleRender = () => {
        if (this.state.render) {
            this.setState(() => {
                let render = {...this.state.render};
                render = false;
                return {render};
            })
        } else {
            this.setState(() => {
                let render = {...this.state.render};
                render = true;
                return {render};
            })
        }
    }


    render() {     



        return <React.Fragment>

            <div style={{marginTop: "10%"}}>
                <span>
                    <button onClick={this.toggleRender} type="button" className="btn btn-primary" style={{float: "left", marginRight: "5px"}}>Show Cars</button>
                    <select className="form-select" id="year" onChange={this.onFormFieldChanged} value={this.state.year} name="year" style={{ marginLeft: "10px", width:"15%"}}>
                       <option value={1}>All</option>
                       <option value={2019}>2019</option>
                       <option value={2020}>2020</option>
                       <option value={2021}>2021</option>
                       
                     </select>
                </span>
            </div>

               <Route path="/" >
                   <Car {...this.props} {...this.state} />
                   </Route>     

        </React.Fragment>
    }
}







export default Cars;