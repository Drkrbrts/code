import React from "react";
import widgetService from "./WidgetEntity";
import { toast } from "react-toastify";

class WidgetForm extends React.Component {

    state = {
        name: "",
        manufacturer: "",
        description: "",
        cost: 0
    }

    onFormFieldChange = (e) => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;

        this.setState(()=>{
            let newState = {};
            newState[inputName] = newValue;

            return newState;
        })
    }

    addWidget = () => {
        let payload = {
            name: this.state.name,
            manfacturer: this.state.manufacturer,
            description: this.state.description,
            cost: this.state.cost
        }

        widgetService.add(payload)
            .then(this.addSuccess)
            .catch(this.addError)
    }

    addSuccess = response => {
        toast.success("widget item: " + response.data.item + " was successfully added")
        console.log(response.data)
    }

    addError = response => {
        toast.error("You done goofed up")
        console.log(response)
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                    type="text"
                    className="form-control" 
                    id="name" 
                    name="name"
                    onChange={this.onFormFieldChange} 
                    value={this.state.name} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="manufacturer">
                        Manufacturer
                    </label>
                    <input
                    type="text"
                    className="form-control" 
                    id="manufacturer" 
                    name="manufacturer"
                    onChange={this.onFormFieldChange} 
                    value={this.state.manufacturer} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input
                    type="text"
                    className="form-control" 
                    id="description" 
                    name="description"
                    onChange={this.onFormFieldChange} 
                    value={this.state.description} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cost">
                        Cost
                    </label>
                    <input
                    type="number"
                    className="form-control" 
                    id="cost" 
                    name="cost"
                    onChange={this.onFormFieldChange} 
                    value={this.state.cost} 
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={this.addWidget}>Add</button>
            </form>
        )
    }
}

export default WidgetForm;