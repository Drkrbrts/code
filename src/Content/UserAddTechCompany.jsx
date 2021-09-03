import React from "react"
import * as techCompanyService from "../services/techCompanyService"

class UserAddTechCompany extends React.Component{

    state = {
        formData: {
            images: []
        }
    }

    componentDidMount(){
        console.log("componentDidMount() -> UserAddTechCompanyPage");
    }

    onFormFieldChange = (e) => {
        e.preventDefault();
        let currentTarget = e.currentTarget;
        let inputName = currentTarget.name;
        let newValue = currentTarget.value;
        this.setState(()=>{
            let formData = {...this.state.formData}
            if(inputName === "imageTypeId" || inputName === "imageUrl"){
                formData.images[inputName] = newValue
            } else if(inputName === "urls"){
                formData[inputName] = newValue.split(",")
            } else if(inputName === "tags"){
                formData[inputName] = newValue.split(",")
            } else if(inputName === "friendIds"){
                formData[inputName] = parseInt(newValue.split(","))
            }
            else {
                formData[inputName] = newValue
            }
            return {formData}
        })
    }

    onSubmitClick = (e) => {
        e.preventDefault();
        console.log(this.state.formData);
    }

    render(){
        return(
            <React.Fragment>
                <div className="container p-2 my-1 bg-success rounded-3">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start px-3">
                        <h3 className="my-1 text-white">Add or Edit Tech Company</h3>
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
                                            // value={this.state.formData.title}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="profile"
                                        className="col-form-label col-sm-2"
                                        ><strong>Profile</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Profile"
                                            name="profile"
                                            onChange={this.onFormFieldChange}
                                            // value={this.state.formData.title}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="summary"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Co. Summary</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Summary"
                                            name="summary"
                                            onChange={this.onFormFieldChange}
                                            // value={this.state.formData.summary}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="headline"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Co. Headline</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Headline"
                                            name="headline"
                                            onChange={this.onFormFieldChange}
                                            // value={this.state.formData.description}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="contactInformation"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Contact Information</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            name="contactInformation"
                                            onChange={this.onFormFieldChange}
                                            // value={this.state.formData.pay}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="slug"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Slug</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Slug"
                                            name="slug"
                                            onChange={this.onFormFieldChange}
                                            // value={this.state.formData.slug}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="statusId"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Status</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Active"
                                            name="statusId"
                                            onChange={this.onFormFieldChange}
                                            // value={this.state.formData.statusId}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="images"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Images</strong></label
                                    >
                                    <div className="col-sm-2">
                                        <input
                                            type="number"
                                            min="0"
                                            className="form-control"
                                            placeholder="Image ID"
                                            name="imageTypeId"
                                            onChange={this.onFormFieldChange}
                                            // value={this.state.formData.statusId}
                                        />
                                    </div>

                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Image Url"
                                            name="imageUrl"
                                            onChange={this.onFormFieldChange}
                                            // value={this.state.formData.statusId}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="urls"
                                        className="col-sm-2 col-form-label"
                                        ><strong>URLs</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            name="urls"
                                            onChange={this.onFormFieldChange}
                                            // value={this.state.formData.statusId}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="tags"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Tags</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            name="tags"
                                            onChange={this.onFormFieldChange}
                                            // value={this.state.formData.statusId}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="friendIds"
                                        className="col-sm-2 col-form-label"
                                        ><strong>Friend IDs</strong></label
                                    >
                                    <div className="col-sm-10">
                                        <input
                                            type="number"
                                            min="0"
                                            className="form-control"
                                            placeholder=""
                                            name="friendIds"
                                            onChange={this.onFormFieldChange}
                                            // value={this.state.formData.statusId}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        onClick={this.onSubmitClick}
                                        name="jobId"
                                        // value={this.state.jobId}
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

export default UserAddTechCompany