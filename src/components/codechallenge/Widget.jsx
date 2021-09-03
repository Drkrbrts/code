import React from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as widgetService from "./widgetService";

class Widget extends React.Component {

    state = {
        formData:{
            name: ""
            ,manufacturer: ""
            ,description: ""
            ,cost: ""
        }
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


    onClickSubmitHandler = (e) => {
        e.preventDefault();
        let box = this.state.formData;
        box.cost = Number(box.cost);
        
        if (!isNaN(box.cost))
        {
            widgetService.createWidget(box)
            .then(this.onEntitySuccess)
            .catch(this.onEntityError);
        }
        else
        {
            toast.error("Please enter a number in the cost field");
        }
        
    }
    
    onEntitySuccess = (response) => {
        let entityId = response.data.item;
        toast.success(`Entity Id ${entityId} was created successfully!`);
    
    }
    
    onEntityError= (errResponse) => {

        console.log("Entity creation error:",{error: errResponse})
        toast.error("Entity creation error");
    }

    render() {

        return (
        <React.Fragment>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card border-rad">
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center">Widget Information</h2>
                
                                <form id="first-form">
                
                                <div className="form-outline mb-4">
                                    <input
                                    value={this.state.formData.name}
                                    onChange={this.onFormFieldChanged}
                                    name="name" 
                                    placeholder="Name:"  
                                    type="text" 
                                    id="name" 
                                    className="form-control form-control-lg" />
                                </div>
                
                                <div className="form-outline mb-4">
                                    <input 
                                    value={this.state.formData.manufacturer}
                                    onChange={this.onFormFieldChanged}
                                    name="manufacturer"
                                    placeholder="Manufacturer:"  
                                    type="text" 
                                    id="manufacturer" 
                                    className="form-control form-control-lg" />
                                </div>

                                <div className="form-outline mb-4">
                                    <input 
                                    value={this.state.formData.description}
                                    onChange={this.onFormFieldChanged}
                                    name="description"
                                    placeholder="Description:"  
                                    type="text" 
                                    id="description" 
                                    className="form-control form-control-lg" />
                                </div>

                                <div className="form-outline mb-4">
                                    <input 
                                    value={this.state.formData.cost}
                                    onChange={this.onFormFieldChanged}
                                    name="cost"
                                    placeholder="Cost:"  
                                    type="text" 
                                    id="cost" 
                                    className="form-control form-control-lg" />
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <span className="align-button">
                                        <button
                                        onClick={this.onClickSubmitHandler} 
                                        type="submit" 
                                        className="btn btn-warning sign-in-button">
                                            Submit
                                        </button>

                                        </span>
                                    </div>
                                </div>
                                </form>
                
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>  
        </React.Fragment>
        )
    }
};

export default Widget;