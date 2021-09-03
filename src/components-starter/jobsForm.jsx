import React from "react";
import { createJob, updateJob, getJobById } from "../services/jobsService";
import debug from "sabio-debug";
const _logger = debug.extend("JobsForm");

class JobsForm extends React.Component
{

    state = {
        shouldUpdateJob: false,
        formData: {
            "title": "",
            "description": "",
            "summary": "",
            "pay": "",
            "slug": "",
            "statusId": "Active",
            "techCompanyId": 0,
            "skills": [
                ""
            ]
        }
    }

    componentDidMount()
    {

        let passedId = this.props.match.params.id;

        if (passedId)
        {
            getJobById(passedId)
                .then(this.onGetJobByIdSuccess)
                .catch(this.onGetJobByIdFail)
        }
    }

    onGetJobByIdSuccess = (response) =>
    {
        _logger("getJobById success!", response);


        this.setState(() =>
        {
            let formDataCopy = { ...this.state.formData }
            let jobFound = response.data.item;
            let jobFoundSkills = response.data.item.skills[0].name;
            formDataCopy.title = jobFound.title;
            formDataCopy.description = jobFound.description
            formDataCopy.summary = jobFound.summary
            formDataCopy.pay = jobFound.pay
            formDataCopy.slug = jobFound.slug
            formDataCopy.statusId = jobFound.statusId
            formDataCopy.techCompanyId = jobFound.techCompany.id
            formDataCopy.skills = [jobFoundSkills];

            let shouldUpdateJob = { ...this.state.shouldUpdateJob };
            shouldUpdateJob = true;
            return {
                formData: formDataCopy,
                shouldUpdateJob
            }

        })
        this.props.history.push("/jobs");
    }

    onGetJobByIdFail = (response) =>
    {
        _logger("getJobById failed", response);

    }

    onChangeFunction = (e) =>
    {

        let inputName = e.currentTarget.name;
        let inputValue = e.currentTarget.value;


        this.setState(() =>
        {
            let formData = { ...this.state.formData };
            // _logger(formData);
            if (inputName === "skills")
            {
                inputValue = [
                    inputValue
                ]
            }
            formData[inputName] = inputValue;
            return { formData }

        })
    }

    onCreateJobSuccess = (response) =>
    {
        _logger(response);
        alert("Job created!");
        this.setState(() =>
        {
            let stateCopy = { ...this.state };
            stateCopy.shouldUpdateJob = true;
            stateCopy.jobId = response.data.item;
            return stateCopy;
        })
    }

    onCreateJobFail = (response) =>
    {
        _logger("createJob failed:", response);
    }

    onCreateJobClicked = () =>
    {
        let jobInfo = this.state.formData;
        _logger(jobInfo);
        createJob(jobInfo)
            .then(this.onCreateJobSuccess)
            .catch(this.onCreateJobFail);
    }

    onUpdateJobSuccess = (response) =>
    {
        _logger(response);
        alert("Job updated!");
    }

    onUpdateJobFail = (response) =>
    {
        _logger("Job failed to update:", response);
    }

    onUpdateFriendClicked = () =>
    {
        let jobInfo = this.state.formData;
        let jobId = this.props.match.params.id;
        _logger(jobId);
        updateJob(jobInfo, jobId)
            .then(this.onUpdateJobSuccess)
            .catch(this.onUpdateJobFail);
    }

    render()
    {
        return (
            <React.Fragment>
                <header className="m-5">
                    {this.props.match.params.id && <h1>Update This Job</h1>}
                    {!this.props.match.params.id && <h1>Create a Job</h1>}

                </header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 p-5">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title:</label>
                                    <input type="text"
                                        className="form-control"
                                        name="title"
                                        value={this.state.formData.title}
                                        onChange={this.onChangeFunction}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description:</label>
                                    <input type="text"
                                        className="form-control"
                                        name="description"
                                        value={this.state.formData.description}
                                        onChange={this.onChangeFunction}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="summary" className="form-label">Summary:</label>
                                    <input type="text"
                                        className="form-control"
                                        name="summary"
                                        value={this.state.formData.summary}
                                        onChange={this.onChangeFunction}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pay" className="form-label">Pay:</label>
                                    <input type="text"
                                        className="form-control"
                                        name="pay"
                                        value={this.state.formData.pay}
                                        onChange={this.onChangeFunction}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="slug" className="form-label">Slug:</label>
                                    <input type="text"
                                        className="form-control"
                                        name="slug"
                                        value={this.state.formData.slug}
                                        onChange={this.onChangeFunction}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="statusId" className="form-label">Status ID:</label>
                                    <input type="text"
                                        className="form-control"
                                        name="statusId"
                                        value={this.state.formData.statusId}
                                        onChange={this.onChangeFunction}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="techCompanyId" className="form-label">Tech Company ID:</label>
                                    <input type="text"
                                        className="form-control"
                                        name="techCompanyId"
                                        value={this.state.formData.techCompanyId}
                                        onChange={this.onChangeFunction}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="skills" className="form-label">Skills:</label>
                                    <input type="text"
                                        className="form-control"
                                        name="skills"
                                        value={this.state.formData.skills}
                                        onChange={this.onChangeFunction}
                                    />
                                </div>
                            </form>
                            {this.state.shouldUpdateJob && <button type="button" className="btn btn-success" onClick={this.onUpdateFriendClicked}>Update Job</button>}
                            {!this.state.shouldUpdateJob && <button type="button" className="btn btn-primary" onClick={this.onCreateJobClicked}>Create Job</button>}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default JobsForm;