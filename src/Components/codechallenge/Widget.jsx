import React from "react"
import { toast } from "react-toastify";
import * as entityService from "./entityService"

class Widget extends React.Component{

    state = {
        formData: {},
        entityName: "",
    }

    componentDidMount(){
        console.log("componentDidMount() -> Widget");
    }

    onFormFieldChange = (e) => {
        e.preventDefault();
        let currentTarget = e.currentTarget;
        let inputName = currentTarget.name;
        let newValue = currentTarget.value;

        this.setState(()=>{
            let formData = {...this.state.formData}
            let entityName = this.state.entityName
            if(inputName === "cost"){
                formData[inputName] = parseInt(newValue)
            } else if(inputName === "name"){
                entityName = newValue
            } else {
                formData[inputName] = newValue
            }
            return {formData, entityName}
        })
    }

    onSubmitClick = (e) => {
        e.preventDefault();
        let entityData = this.state.formData;
        let entityName = this.state.entityName;
        entityService.addEntity(entityName, entityData)
            .then(this.onAddEntitySuccess)
            .catch(this.onAddEntityError)
    }

    onAddEntitySuccess = (response) => {
        console.log(response.data, "onAddEntitySuccess");
        console.log("Successfully added entity with the id of:", response.data.item);
        toast.success(`Successfully created entity with the id: ${response.data.item}!`)
    }

    onAddEntityError = (errResponse) => {
        console.log({ error:errResponse }, errResponse.response.data.errors);
        toast.error(`Make sure Name field is plural and all other fields are filled correctly!`)
    }

    render(){
        return(
        <React.Fragment>
            <div className="container p-2 my-1 bg-secondary rounded-3">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start px-3">
                    <h3 className="my-1 text-white">Widget</h3>
                </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 my-3">
                <div className="card border-0 shadow">
                    <div className="card-body m-4">
                        <form>
                            <div className="form-group mb-3 row">
                                <label
                                    htmlFor="name"
                                    className="col-form-label col-sm-2"
                                    ><strong>Name</strong></label
                                >
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        onChange={this.onFormFieldChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group mb-3 row">
                                <label
                                    htmlFor="manufacturer"
                                    className="col-sm-2 col-form-label"
                                    ><strong>Manufacturer</strong></label
                                >
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Manufacturer"
                                        name="manufacturer"
                                        onChange={this.onFormFieldChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group mb-3 row">
                                <label
                                    htmlFor="description"
                                    className="col-sm-2 col-form-label"
                                    ><strong>Description</strong></label
                                >
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Description"
                                        name="description"
                                        onChange={this.onFormFieldChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group mb-3 row">
                                <label
                                    htmlFor="cost"
                                    className="col-sm-2 col-form-label"
                                    ><strong>Cost</strong></label
                                >
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="cost"
                                        onChange={this.onFormFieldChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={this.onSubmitClick}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default Widget