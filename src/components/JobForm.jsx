import React from "react";
import { withRouter } from "react-router-dom";
import "./compStyle.css";
import jobService from "../services/jobService";
import techCoService from "../services/techCoService";
import { toast } from "react-toastify";
import debug from "sabio-debug";
const _logger = debug.extend("App");

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
      .catch(this.onError);

    let { state } = this.props.location;

    if (state) {
      let formData = { ...state };
      formData.techCompanyId = formData.techCompany.id;
      formData.skills = formData.skills.map(this.skillEditMap);
      this.setState((prevState) => {
        return { ...prevState, formData };
      });
    }
  }

  skillEditMap = (skill) => {
    return ` ${skill.name}`;
  };

  onGetTechCoSuccess = (response) => {
    let { pagedItems } = response.data.item;
    this.setState((prevState) => {
      let techCompanies = { ...prevState.techCompanies };
      techCompanies = pagedItems;
      let mappedTechCos = techCompanies.map(this.mapTechCo);
      return { techCompanies: mappedTechCos };
    });
  };

  onError = (response) => {
    _logger({ response });
    toast.error(`${response.response.data.errors}`);
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      if (inputName === "skills") {
        formData[inputName] = newValue.split(",");
      } else {
        formData[inputName] = newValue;
      }
      return { formData };
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
    _logger(response);
    let currentFormData = { ...this.state.formData };
    this.skillChange(currentFormData);
    _logger("current Form Data", currentFormData);
    jobService
      .update(response.data.item.id, currentFormData)
      .then(this.onUpdateSuccess)
      .catch(this.onError);
  };

  skillChange = (formData) => {
    if (typeof formData.skills === "string") {
      formData.skills = [formData.skills];
    }
  };

  onUpdateSuccess = (response) => {
    _logger(response);
    toast.success("Job Successfully Updated");
  };

  onGetBySlugError = () => {
    let currentFormData = { ...this.state.formData };
    this.skillChange(currentFormData);
    _logger("current form Data", currentFormData);
    jobService.add(currentFormData).then(this.onAddSuccess).catch(this.onError);
  };

  onAddSuccess = (response) => {
    _logger(response);
    toast.success("Job Successfully Added");
  };

  mapTechCo = (onetTechCo) => {
    return (
      <option key={`techCo-${onetTechCo.id}`} value={onetTechCo.id}>
        {onetTechCo.name}
      </option>
    );
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
                      {this.state.techCompanies}
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
