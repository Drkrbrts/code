import React from "react";
import jobService from "./jobService";
import { toast } from "react-toastify";

class JobsAddEdit extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.match.params.id) {
      this.state = { formData: this.props.location.state.currentJob };
    } else {
      this.state = {
        formData: {
          techCompanyName: "",
          techCompanyId: "",
          title: "",
          description: "",
          summary: "",
          pay: "",
          slug: "",
          statusId: "",
          skills: "",
        },
      };
    }
  }
  componentDidMount() {
    if (this.props.match.params.id && this.state.formData.pay === "") {
      jobService
        .getJobById(this.props.match.params.id)
        .then(this.onGetByIdSuccess)
        .catch(this.onFailure);
      console.log(this.state.formData);
    }
  }
  onGetByIdSuccess = (data) => {
    console.log("getting by id on jobsAddEdit");
    const jobData = data.data.item;
    jobData.techCompanyName = jobData.techCompany.name;
    jobData.techCompanyId = jobData.techCompany.id;
    const skills = jobData.skills.map((param) => param.name);
    jobData.skills = skills[0];
    this.setState((prevState) => {
      return { ...prevState, formData: jobData };
    });
  };
  changeFormData = (e) => {
    let target = e.target;
    let name = target.name;
    if (target.type === "checkbox") {
      if (target.checked === true) {
        target.value = "Active";
      } else if (target.checked === false) {
        target.value = "NotSet";
      }
    }
    let val = target.name === "skills" ? [target.value] : target.value;
    this.setState((prevState) => {
      const formData = { ...prevState.formData, [name]: val };
      return { formData: formData };
    });
  };
  submitFilter = () => {
    if (this.props.match.params.id) {
      if (!Array.isArray(this.state.formData.skills)) {
        this.setState((prevState) => {
          const formData = { ...prevState.formData };
          formData.skills = [this.state.formData.skills];
          return { formData };
        }, this.onUpdateClick);
      } else {
        this.onUpdate();
      }
    } else {
      jobService
        .addJobs(this.state.formData)
        .then(this.onSubmitSuccess)
        .catch(this.onFailure);
    }
  };
  onSubmitSuccess = (data) => {
    console.log(data);
    toast.success("Job Added!");
    this.props.match.params.id = data.data.item;
    this.props.history.push(`/jobs/${data.data.item}/edit`, {
      currentJob: this.state.formData,
    });
  };
  onUpdate = () => {
    jobService
      .changeJob(this.state.formData, this.props.match.params.id)
      .then(this.onUpdateSuccess)
      .catch(this.onFailure);
  };
  onUpdateSuccess = (data) => {
    console.log(data);
    toast.success("Job Updated!");
  };
  onReturnClick = () => {
    this.props.history.push("/jobs");
  };
  onFailure = (data) => {
    console.warn(data);
    toast.error("There was an error");
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form className="overlay">
            <div className="mb-3">
              <label className="form-label">
                <strong>Tech Company Name</strong>
              </label>
              <input
                className="form-control"
                placeholder="Tech Name"
                name="techCompanyName"
                onChange={this.changeFormData}
                value={this.state.formData.techCompanyName}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Tech Company Id</strong>
              </label>
              <input
                className="form-control"
                placeholder="Tech ID"
                name="techCompanyId"
                onChange={this.changeFormData}
                value={this.state.formData.techCompanyId}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Title</strong>
              </label>
              <input
                className="form-control"
                placeholder="Job Title"
                name="title"
                onChange={this.changeFormData}
                value={this.state.formData.title}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Description</strong>
              </label>
              <input
                className="form-control"
                placeholder="Job Description"
                name="description"
                onChange={this.changeFormData}
                value={this.state.formData.description}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Summary</strong>
              </label>
              <input
                className="form-control"
                placeholder="Job Summary"
                name="summary"
                onChange={this.changeFormData}
                value={this.state.formData.summary}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Pay</strong>
              </label>
              <input
                className="form-control"
                placeholder="Salary/yr"
                name="pay"
                onChange={this.changeFormData}
                value={this.state.formData.pay}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Slug</strong>
              </label>
              <input
                className="form-control"
                placeholder="Unique Job Identifier"
                name="slug"
                onChange={this.changeFormData}
                value={this.state.formData.slug}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Skills</strong>
              </label>
              <input
                className="form-control"
                placeholder="Job Skills"
                name="skills"
                onChange={this.changeFormData}
                value={this.state.formData.skills}
              />
            </div>
            <div className="mb-3">
              <label
                className="form-check-label m-1"
                htmlFor="statusId"
                style={{ marginLeft: "7px" }}
              >
                <strong>
                  {this.props.match.params.id ? "Keep Job Active?" : "Activate"}
                </strong>
              </label>
              <input
                className="form-check-input m-2"
                type="checkbox"
                defaultValue
                name="statusId"
                onChange={this.changeFormData}
              />
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                name="sendButton"
                onClick={this.submitFilter}
              >
                {this.props.match.params.id ? "Update" : "Submit"}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ float: "right" }}
                onClick={this.onReturnClick}
              >
                Go Back
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default JobsAddEdit;
