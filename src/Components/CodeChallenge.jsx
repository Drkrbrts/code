import React from "react";
import {Route} from "react-router-dom";
import SubmitButton from "./SubmitButton";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as entityService from "../services/entityService";


class CodingChallenge extends React.Component {

    state = {
        formData: {
            name: "name",
        manufacturer: "who made it",
        description: "appearance",
        cost: 0
        }
    }

    onFormFieldChanged = (e) => {

        let currentTarget = e.currentTarget;
        let inputName = currentTarget.name;
        let newValue = currentTarget.value;

        this.setState(() => {
            let formData = {...this.state.formData};
            formData[inputName] = newValue;

            return {formData};
        })
    }

    formSubmit = () => {    
        let inputs = {};
        
        for (let key in this.state.formData) {
            inputs[key] = document.querySelector(`#${key}`).value;
        }
        
        entityService.addEntity(inputs).then(response => {
            console.log(response, "onAddEntitySuccess");
            toast.success(`Entity Created! Id#${response.data.item}`);
            
        }).catch(error => {
            console.warn(error, "onAddEntityFailure");
            toast.error("Failed to Create Entity!");
            
        })                                                                                                     
    }
                                                                 
                                                                     
                             
                                                    
    render() {                                      
   
        return <React.Fragment>
            <form className="p-3" style={{float: "left", width: "30%"}}>
             <input id="name" onChange={this.onFormFieldChanged} name="name" value={this.state.formData.name}  className="form-control input" style={{margin: "5px"}} />
             <input id="manufacturer" onChange={this.onFormFieldChanged} name="manufacturer" value={this.state.formData.manufacturer}  className="form-control input" style={{margin: "5px"}} />
             <input id="description" onChange={this.onFormFieldChanged} name="description" value={this.state.formData.description} type="email" className="form-control input" style={{margin: "5px"}} />
             <input id="cost" onChange={this.onFormFieldChanged} name="cost" value={this.state.formData.cost}  className="form-control input" style={{margin: "5px"}} />
             <Route >
        <SubmitButton action={this.formSubmit} {...this.props} />
    </Route>
            </form>

        </React.Fragment>
    }      
}




export default CodingChallenge;