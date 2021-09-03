import React, { Component } from "react";
import { toast } from "react-toastify";
import jobsServices from "../services/jobsServices";
import techCoServices from "../services/techCoServices";
import { NavLink } from "react-router-dom";

class JobsForm extends Component {
  state = {
    techCoOptions: [],
    updateJob: false,
    jobsForm: {
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      statusId: "",
      techCompanyId: "",
      skills: [],
    },
  };

  componentDidMount() {
    techCoServices
      .getAll(0, 30)
      .then(this.onGetTechCosSuccess)
      .catch(this.onGetTechCosError);
  }

  onGetTechCosSuccess = (response) => {
    console.log(response);

    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.techCoOptions = response.data.item.pagedItems.map(
        this.mapComaniesForForm
      );

      return newState;
    });
    let jobId = this.props.match.params.id;
    if (jobId) {
      jobsServices
        .getJobById(jobId)
        .then(this.onGetJobByIdSuccess)
        .catch(this.onGetJobByIdError);
    }
  };

  onGetTechCosError = (errResponse) => {
    console.log(errResponse);
  };

  onGetJobByIdSuccess = (response) => {
    console.log(response);
    let jobToEdit = response.data.item;
    this.setState((prevState) => {
      let newJobsForm = { ...prevState.jobsForm };

      newJobsForm.id = jobToEdit.id;
      newJobsForm.title = jobToEdit.title;
      newJobsForm.description = jobToEdit.description;
      newJobsForm.summary = jobToEdit.summary;
      newJobsForm.pay = jobToEdit.pay;
      newJobsForm.slug = jobToEdit.slug;
      newJobsForm.statusId = jobToEdit.statusId;
      newJobsForm.techCompanyId = jobToEdit.techCompany.id;
      newJobsForm.skills = jobToEdit.skills.map(this.mapSkills);

      return { jobsForm: newJobsForm };
    });
  };
  onGetJobByIdError = (errResponse) => {
    console.log(errResponse);
  };

  mapSkills = (skills) => {
    return skills.name;
  };

  mapComaniesForForm = (companies) => {
    return (
      <option key={`opt-${companies.id}`} value={companies.id}>
        {companies.name}
      </option>
    );
  };

  onJobsFormChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      let newJobForm = { ...prevState.jobsForm };

      if (inputName === "skills") {
        newJobForm.skills = newValue.split(",");
      } else {
        newJobForm[inputName] = newValue;
      }

      return { jobsForm: newJobForm };
    });
  };

  onJobFormClick = (e) => {
    e.preventDefault();
    let jobPayload = this.state.jobsForm;

    if (!jobPayload.id) {
      jobsServices
        .addJob(jobPayload)
        .then(this.onAddJobSuccess)
        .catch(this.onAddJobError);
    } else {
      jobsServices
        .getJobById(jobPayload.id)
        .then(this.onCheckIdSuccess)
        .catch(this.onCheckIdError);
    }
  };

  onAddJobSuccess = (response) => {
    console.log(response);

    this.setState((prevState) => {
      let newJobForm = { ...prevState.jobsForm };
      newJobForm.id = response.data.item;
      return { jobsForm: newJobForm };
    });

    toast.success("Success: New job addded!");
  };
  onAddJobError = (errResponse) => {
    console.log(errResponse);
    toast.error(`Error: failed to add, ${errResponse.response.data.errors}`);
  };

  onCheckIdSuccess = (response) => {
    console.log(response);
    let newJobPayload = { ...this.state.jobsForm };
    if (newJobPayload.slug === response.data.item.slug) {
      jobsServices
        .updateJob(newJobPayload, newJobPayload.id)
        .then(this.onUpdateJobSuccess)
        .catch(this.onUpdateJobError);
    } else {
      delete newJobPayload.id;
      jobsServices
        .addJob(newJobPayload)
        .then(this.onAddJobSuccess)
        .catch(this.onAddJobError);
    }
  };
  onCheckIdError = (errResponse) => {
    console.log(errResponse);
  };

  onUpdateJobSuccess = (response) => {
    console.log(response);
    toast.success("Success: Job record updated!");
  };
  onUpdateJobError = (errResponse) => {
    console.log(errResponse);
    toast.error(`Error: failed to update, ${errResponse.response.data.errors}`);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container m-5">
          <div className="row">
            <div className="col-md-5 border p-4 shadow">
              <h2>Add or Update Jobs</h2>
              <NavLink to="/jobs">View All Jobs</NavLink>
              <hr className="my-4" />
              <form className="register-form">
                <div className="col-12">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="The job title goes here."
                    onChange={this.onJobsFormChanged}
                    value={this.state.jobsForm.title}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="This is a description."
                    onChange={this.onJobsFormChanged}
                    value={this.state.jobsForm.description}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="summary" className="form-label">
                    Summary
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="summary"
                    name="summary"
                    placeholder="This is a summary"
                    onChange={this.onJobsFormChanged}
                    value={this.state.jobsForm.summary}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="pay" className="form-label">
                    Pay
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pay"
                    name="pay"
                    placeholder="Dolla dolla bills y'all"
                    onChange={this.onJobsFormChanged}
                    value={this.state.jobsForm.pay}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="slug" className="form-label">
                    Slug
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Unique Slug"
                    id="slug"
                    name="slug"
                    onChange={this.onJobsFormChanged}
                    value={this.state.jobsForm.slug}
                  />
                </div>

                <div className="col-12 form-group">
                  <label className="form-label">StatusId</label>
                  <select
                    name="statusId"
                    htmlFor="statusId"
                    className="form-select"
                    onChange={this.onJobsFormChanged}
                    value={this.state.jobsForm.statusId}
                  >
                    <option value="">NotSet</option>
                    <option value="Active">Active</option>
                    <option value="Deleted">Deleted</option>
                    <option value="Flagged">Flagged</option>
                  </select>
                </div>

                <div className="col-12 form-group">
                  <label className="form-label">Tech Company</label>
                  <select
                    name="techCompanyId"
                    htmlFor="techco"
                    className="form-select"
                    onChange={this.onJobsFormChanged}
                    value={this.state.jobsForm.techCompanyId}
                  >
                    <option value="">Select Company</option>
                    {this.state.techCoOptions}
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="primaryImage" className="form-label">
                    Skills
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="skills"
                    name="skills"
                    placeholder="Skills separated by a comma."
                    onChange={this.onJobsFormChanged}
                    value={this.state.jobsForm.skills}
                  />
                </div>

                <div className="mt-2 col-6">
                  <button
                    id="friendForm"
                    className="w-100 btn btn-primary btn"
                    type="submit"
                    onClick={this.onJobFormClick}
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

export default JobsForm;
