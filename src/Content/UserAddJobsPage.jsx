import React from "react"
import RenderCompany from "./RenderCompany";
import * as techCompanies from "../services/techCompanyService"
import * as jobService from "../services/jobService"

class UserAddJobsPage extends React.Component{

    state = {
        formData: {},
        techCompanies: [{}],
        jobId: 0
    }

    componentDidMount(){
        console.log("componentDidMount() -> UserAddJobsPage");

        techCompanies.getTechCompanies(0,10)
            .then(this.onGetTechCompaniesSuccess)
            .catch(this.onGetTechCompaniesError)
        // call GET api for 10 techCos. to fill drop down menu.
    }

    onFormFieldChange = (e) => {
        e.preventDefault();

        let currentTarget = e.currentTarget;
        let inputName = currentTarget.name;
        let newValue = currentTarget.value;

        this.setState(() => {
            let formData = {...this.state.formData}
            if(inputName === "techCompanyId"){
                formData[inputName] = parseInt(newValue);
            } else if(inputName === "skills"){
                formData[inputName] = newValue.split(",")
            } else {
                formData[inputName] = newValue;
            // formData["techCompanyId"] = parseInt(newValue)
            }

            return {formData}
        })
    }

    onSubmitClick = (e) => {
        e.preventDefault();

        console.log(this.state.formData);
        
        if(e.currentTarget.value == 0){
            let jobData = this.state.formData
            console.log("successfully added job:", jobData);
            // jobService.addJob(jobData)
            //     .then(this.onAddJobSuccess)
            //     .catch(this.onAddJobError)
        }else{
            let currentJobId = this.state.jobId;
            let jobData = this.state.formData

            console.log(`${jobData}: ${currentJobId}`);

            // jobService.updateJob(currentJobId, jobData)
            //     .then(this.onUpdateJobSuccess)
            //     .catch(this.onUpdateJobError)
        }
    }

    //####### SUCCESS HANDLERS #######//
    onGetTechCompaniesSuccess = (response) => {
        console.log(response.data, "onGetTechCompaniesSuccess");
        let companies = response.data.item.pagedItems;

        this.setState({
            mappedCompanies: companies.map(this.mapTechCompanies)
        })
    }

    onAddJobSuccess = (response) => {
        console.log(response.data, "onAddJobSuccess");

        this.setState({
            jobId: response.data.item
        })
    }

    onUpdateJobSuccess = (response) => {
        console.log(response.data, "onUpdateJobSuccess");
    }

    //####### ERROR HANDLERS #######//
    onGetTechCompaniesError = (errResponse) => {
        console.log({error:errResponse});
    }

    onAddJobError = (errResponse) => {
        console.log({error:errResponse});
    }

    onUpdateJobError = (errResponse) => {
        console.log({error:errResponse});
    }

    //####### RENDER PAGE #######//
    mapTechCompanies = (company) => {
        return(
            <React.Fragment key={`tecCo-${company.id}`}>
                <RenderCompany
                    company={company}
                />
            </React.Fragment>
        )
    }

    render(){
        return(
            <>
            <div className="container p-2 my-1 bg-secondary rounded-3">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start px-3">
                    <h3 className="my-1 text-white">Add or Edit Job</h3>
                </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 my-3">
                <div className="card border-0 shadow">
                    <div className="card-body m-4">
                        <form>
                            <div className="form-group mb-3 row">
                                <label
                                    htmlFor="title"
                                    className="col-form-label col-sm-2"
                                    ><strong>Role</strong></label
                                >
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Title"
                                        name="title"
                                        onChange={this.onFormFieldChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group mb-3 row">
                                <label
                                    htmlFor="techCompanyId"
                                    className="
                                        col-sm-2 col-form-label
                                        forTechId
                                    "
                                    ><strong> Tech Company </strong></label
                                >
                                <div className="col-sm-10">
                                    <select
                                        className="form-select"
                                        name="techCompanyId"
                                        onChange={this.onFormFieldChange}
                                    >
                                        <option>Select</option>
                                        {this.state.mappedCompanies}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group mb-3 row">
                                <label
                                    htmlFor="description"
                                    className="col-sm-2 col-form-label"
                                    ><strong>Job Description</strong></label
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
                                    htmlFor="summary"
                                    className="col-sm-2 col-form-label"
                                    ><strong>Job Summary</strong></label
                                >
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Summary"
                                        name="summary"
                                        onChange={this.onFormFieldChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group mb-3 row">
                                <label
                                    htmlFor="pay"
                                    className="col-sm-2 col-form-label"
                                    ><strong>Pay</strong></label
                                >
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="pay"
                                        onChange={this.onFormFieldChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group mb-3 row">
                                <label
                                    htmlFor="skills"
                                    className="col-sm-2 col-form-label"
                                    ><strong>Skills</strong></label
                                >
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Skills"
                                        name="skills"
                                        onChange={this.onFormFieldChange}
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
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={this.onSubmitClick}
                                    name="jobId"
                                    value={this.state.jobId}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
        );
    }

}

export default UserAddJobsPage