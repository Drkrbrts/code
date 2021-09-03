import React from "react";
import * as EntityService from "../codingchallenge/EntityService";
import { toast } from 'react-toastify';


class Widget extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: "",
                manufacturer: "",
                description: "",
                cost: "",
            }
        };

        this.onGetEntitySuccess = this.onGetEntitySuccess.bind(this);
        this.onAddEntitySuccess = this.onAddEntitySuccess.bind(this);
        this.onFormFieldChanged = this.onFormFieldChanged.bind(this);
    }

    componentDidMount() {
        let entityName = "computers";

        EntityService.getEntity(entityName)
            .then(this.onGetEntitySuccess)
            .catch(this.onGetEntityError)
    }
    
    onFormFieldChanged = (e) => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;
        console.log({currentTarget, newValue, inputName});
        this.setState(() => {
            let formData = {...this.state.formData};
            formData[inputName] = newValue;
            formData.cost = formData.cost.toString();
            return {formData};
        });
    };

    onSubmitClicked = () => {
        const data = {...this.state.formData};
        EntityService.addEntity(data)
            .then(this.onAddEntitySuccess)
            .catch(this.onAddEntityError);
    }

    onAddEntitySuccess(response) {
        console.log(response);
        toast.success('🦄 You Successfully Created An Entity', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

            let entityId = response.data.item;

            EntityService.getById(entityId)
                .then(this.onGetByIdSuccess)
                .catch(this.onGetByIdError);

    }

    onGetByIdSuccess(response) {
        console.log(response);
        let myEntity = response.data.item;
        this.setState((preState) => {
            return {mappedEntity: myEntity.map(this.mapEntity) };
        });
    }

    onGetByIdError(err) {
        console.warn(err);
    }

    onAddEntityError(err) {
        console.warn(err);
        toast.error('🦄 Oh no! Something went wrong', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    onGetEntitySuccess(response) {
        console.log(response);
    }

    onGetEntityError(err) {
        console.warn(err);
    }

    mapEntity = (oneEntity) => {
        <React.Fragment key={oneEntity.id}>
            <div className="card" style={{width: "18rem", padding: "20px"}}>
                <div className="card-body">
                    <h5 className="card-title">Name: {this.props.name}</h5>
                <p className="card-text">Manufacturer: {this.props.manufacturer}</p>
            </div>
             <ul className="list-group list-group-flush">
                <li className="list-group-item">Description: {this.props.description}</li>
                <li className="list-group-item">Cost: {this.props.cost}</li>
            </ul>
            </div>
        </React.Fragment>
    }
    
    render() { 
        return ( 
            <div className="p-2 mb-4 bg-light rounded-3">
            <h4 style={{
                textAlign: 'center'
            }}>Widget Form</h4>
          <div className="container-fluid py-1">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" className="form-control" id="name" name="name" onChange={this.onFormFieldChanged}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="inputBio">Manufacturer: </label>
                    <input type="text" className="form-control" id="manufacturer" name="manufacturer" onChange={this.onFormFieldChanged}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="inputSummary">Description: </label>
                    <input type="text" className="form-control" id="inputSummary" name="description" onChange={this.onFormFieldChanged}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="cost">Cost: </label>
                    <input type="text" className="form-control" id="cost" name="cost" onChange={this.onFormFieldChanged}></input>
                </div>
                    <button id="submit" type="button" className="btn btn-primary mr-3 m-3 mb-1" name="submit" onClick={this.onSubmitClicked}>Submit</button>
                </form>
                </div>
                <div className="card-container p-5">
                {this.state.mappedEntity}
                </div>
            </div>
         );
    }
}
 
export default Widget;