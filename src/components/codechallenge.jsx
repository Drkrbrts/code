import React from "react";
import * as entityService from "../services/entityService";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class Widget extends React.Component
{
    state = {
        currentUser: {
            name: ""
            ,  manufacturer: ""
            ,  description: ""
            ,  cost: ""
        }
    };

    // componentDidMount()
    // { 
            //var data = this.state
    //     entityService.add(data)
    //         .then(this.onWidgetCreationSuccess)
    //         .catch(this.onWidgetCreationError);
    // }

    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;

        this.setState(() => {
            let newState = {};
            newState[inputName] = newValue;
            return newState;
        });
    }

    onWidgetCreatedClickHandler = (e) =>
    {    
        var data = this.state;

        e.stopPropagation();
        e.preventDefault();
        console.log("i was clicked", e.currentTarget);

        entityService
            .add(data)
            .then(this.onWidgetCreationSuccess)
            .catch(this.onWidgetCreationError);
    }

    onWidgetCreationSuccess = (response) => {
        let id = response.data.item.id;
        console.log(response);

        entityService
            .getId(id)
            .then(this.getIdSuccess)
            .catch(this.getIdError);

        toast.success("Widget Entity Creation Successful " + id, {
            position: "top-right"
        });
        console.log("Widget Entity Creation Successful, id:", id);
    }

    onWidgetCreationError = (errorResponse) => {
        toast.error("Widget Entity Creation Error", {
            position: "top-center"
        });
        console.error(errorResponse);
    }

    getIdSuccess = (response) =>
    {
        console.log(response);
        this.setState((prevstate) => {
            return {
                currentUser: response.data.item
            };
        });
    }

    getIdError = (error) =>
    {
        console.warn(error);
    }



    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <h1>Create Your Own Widget</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputWidgetName">Widget Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputWidgetName"
                                name="name"
                                onChange={this.onFormFieldChanged}
                                value={this.state.name}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputManufacturer">Manufacturer</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputManufacturer"
                                name="manufacturer"
                                onChange={this.onFormFieldChanged}
                                value={this.state.manufacturer}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputDescription">Description</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputDescription"
                                name="description"
                                onChange={this.onFormFieldChanged}
                                value={this.state.description}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputCost">Cost of Widget</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="inputCost"
                                name="cost"
                                onChange={this.onFormFieldChanged}
                                value={this.state.cost}
                                placeholder="Use a number here: 00.00"
                            />
                        </div>


                        <button 
                            type="button"
                            className="btn btn-primary" 
                            onClick={this.onWidgetCreatedClickHandler}
                            value="Submit"
                        >
                            Create Widget
                        </button>
                        
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Widget;
