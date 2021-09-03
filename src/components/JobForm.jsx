import React from "react";
import { withRouter } from "react-router-dom";
import "./compStyle.css";
import jobService from "../services/jobService";
import techCoService from "../services/techCoService";
import { toast } from "react-toastify";

class JobForm extends React.Component {
  state = {
    formData: {
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      techCompanyId: "",
      skills: "",
    },
    techCompanies: [],
  };

  componentDidMount() {
    techCoService
      .getForJobs()
      .then(this.onGetTechCoSuccess)
      .catch(this.onGetTechCoError);
    if (this.props.match.params.jobId) {
      jobService
        .getById(this.props.match.params.jobId)
        .then(this.onGetByIdSuccess)
        .catch(this.onGetByIdError);
    }
  }

  onGetTechCoSuccess = (response) => {
    // console.log(response.data.item);
    this.setState((prevState) => {
      let techCompanies = { ...prevState.techCompanies };
      techCompanies = response.data.item.pagedItems;
      let mappedTechCos = techCompanies.map(this.mapTechCo);
      return { techCompanies, mappedTechCos };
    });
  };

  onGetTechCoError = (response) => {
    console.log(response);
  };

  mapTechCo = (onetTechCo) => {
    return (
      <option key={`techCo-${onetTechCo.id}`} value={onetTechCo.id}>
        {onetTechCo.name}
      </option>
    );
  };

  onGetByIdSuccess = (response) => {
    // console.log(response.data.item);
    let UpdateData = response.data.item;

    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData.title = UpdateData.title;
      formData.description = UpdateData.description;
      formData.summary = UpdateData.summary;
      formData.pay = UpdateData.pay;
      formData.slug = UpdateData.slug;
      formData.statusId = UpdateData.statusId;
      formData.techCompanyId = UpdateData.techCompany.id;
      formData.skills = UpdateData.skills.map(this.mapSkill);
      return { formData };
    });
  };

  onGetByIdError = (response) => {
    console.log(response);
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let NewValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      if (inputName === "skills") {
        let formData = { ...prevState.formData };
        formData[inputName] = NewValue.split(",");
        return { formData };
      } else {
        let formData = { ...prevState.formData };
        formData[inputName] = NewValue;
        return { formData };
      }
    });
  };

  onSubmitClick = () => {
    let currentFormData = { ...this.state.formData };
    jobService
      .getBySlug(currentFormData.slug)
      .then(this.onGetBySlugSuccess)
      .catch(this.onGetBySlugError);
  };

  onGetBySlugSuccess = (response) => {
    console.log(response);
    let currentFormData = { ...this.state.formData };
    console.log(currentFormData);
    jobService
      .update(response.data.item.id, currentFormData)
      .then(this.onUpdateSuccess)
      .catch(this.onUpdateError);
  };

  onUpdateSuccess = (response) => {
    console.log(response);
    toast.success("Job Successfully Updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  onUpdateError = (response) => {
    console.log(response);
    toast.error(`${response.response.data.errors}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onGetBySlugError = () => {
    let currentFormData = { ...this.state.formData };
    console.log(currentFormData);
    jobService
      .add(currentFormData)
      .then(this.onAddSuccess)
      .catch(this.onAddError);
  };

  onAddSuccess = (response) => {
    console.log(response);
    toast.success("Job Successfully Added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  onAddError = (response) => {
    console.log(response);
    toast.error(`${response.response.data.errors}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <strong className="navbar-brand" href="#">
              Add or Update Job
            </strong>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-6 p-5">
              <div className="card">
                <form className="p-5">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.title}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.description}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="summary" className="form-label">
                      Summary
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="summary"
                      name="summary"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.summary}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pay" className="form-label">
                      Pay
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pay"
                      name="pay"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.pay}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="slug" className="form-label">
                      Slug
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="slug"
                      name="slug"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.slug}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="statusId" className="form-label">
                      Status
                    </label>
                    <select
                      className="form-select"
                      id="statusId"
                      name="statusId"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.statusId}
                    >
                      <option value="NotSet">Not Set</option>
                      <option value="Active">Active</option>
                      <option value="Deleted">Deleted</option>
                      <option value="Flagged">Flagged</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="techCompanyId" className="form-label">
                      Tech Company
                    </label>
                    <select
                      className="form-select"
                      id="techCompanyId"
                      name="techCompanyId"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.techCompanyId}
                    >
                      <option value="">Select a Company</option>
                      {this.state.mappedTechCos}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="skills" className="form-label">
                      Skills
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="skills"
                      name="skills"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.skills}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onSubmitClick}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(JobForm);
