import React, { Component } from "react";
import * as jobService from "../services/jobsService";
import { toast } from "react-toastify";

class JobForm extends Component {
  state = {
    jobFormData: {
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      statusId: "",
      techCompanyId: 0,
      skills: [""],
    },
  };

  componentDidMount() {
    if (this.props.match.params.jobId !== "add") {
      let currJobId = this.props.match.params.jobId;
      jobService.byId(currJobId).then(this.byIdSucc).catch(this.byIdErr);
    } else {
      return;
    }
  }
  onChangeFormData = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let jobFormData = { ...this.state.jobFormData };
      jobFormData[inputName] = newValue;
      return { jobFormData };
    });
  };
  onSave = (e) => {
    e.preventDefault();

    var formData = { ...this.state.jobFormData };
    formData.skills = this.state.jobFormData.skills.split(",");
    let jobId = this.state.jobFormData.id;

    if (this.props.match.params.jobId === "add") {
      jobService.addNew(formData).then(this.addNewSucc).catch(this.addNewErr);
    } else {
      jobService
        .updateCurr(jobId, formData)
        .then(this.updateCurrSucc)
        .catch(this.updateCurrErr);
    }
  };
  updateCurrSucc = (response) => {
    console.log(response);
    toast.success("Updated successfully");
  };
  updateCurrErr = (err) => {
    console.error(err);
    toast.error("There is an error. Check info and try again");
  };
  byIdSucc = (response) => {
    console.log(response);
    let jobSelected = response.data.item;

    const jobInfo = {
      id: jobSelected.id,
      title: jobSelected.title,
      description: jobSelected.description,
      summary: jobSelected.summary,
      pay: jobSelected.pay,
      slug: jobSelected.slug,
      statusId: jobSelected.statusId,
      techCompanyId: jobSelected.techCompany.id,
    };
    let mappedSkills = jobSelected.skills.map(this.mapJobSkills);
    jobInfo.skills = mappedSkills.join(", ");

    this.setState(() => {
      return { jobFormData: jobInfo };
    });
  };
  mapJobSkills = (oldSkillsTemp) => {
    let newSkills = oldSkillsTemp.name;
    let skillsToStr = newSkills.toString();

    return skillsToStr;
  };
  byIdErr = (err) => {
    console.error(err);
  };
  addNewSucc = (response) => {
    console.log(response);
    let newJobId = response.data.item;
    this.props.history.push(`/addOrEditJobs/${newJobId}`);
    toast.success("New job post created!");
  };
  addNewErr = (err) => {
    console.error(err);
    toast.error("There seems to be an issue, please check info.");
  };
  backToJobsPage = () => {
    this.props.history.push("/JobsPage");
  };

  render() {
    return (
      <div className="album bg-light pt-5" style={{ height: "100vh" }}>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 col-12 offset-lg-3">
              <h1 className="text-center formTitle">Add or Edit Job Post</h1>
              <form id="addOrEditJob">
                <div className="form-group">
                  <input
                    type="hidden"
                    readOnly
                    value={this.props.match.params.jobId}
                    className="form-control rounded-pill"
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="title">Role</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    name="title"
                    value={this.state.jobFormData.title}
                    onChange={this.onChangeFormData}
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="description">Location</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    name="description"
                    value={this.state.jobFormData.description}
                    onChange={this.onChangeFormData}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="techCo">Tech Company</label>
                  <select
                    className="form-select rounded-pill form-control"
                    name="techCompanyId"
                    value={this.state.jobFormData.techCompanyId}
                    onChange={this.onChangeFormData}
                  >
                    <option defaultValue>Choose a Tech Company</option>
                    <option value="25258">DogeCoin</option>
                    <option value="25257">Tesla</option>
                    <option value="25256">Twitter</option>
                    <option value="25255">Microsoft</option>
                    <option value="25246">Google</option>
                    <option value="25336">Amazon</option>
                  </select>
                </div>
                <div className="form-group ">
                  <label htmlFor="summary">Job Summary</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    name="summary"
                    value={this.state.jobFormData.summary}
                    onChange={this.onChangeFormData}
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="pay">Pay</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    name="pay"
                    value={this.state.jobFormData.pay}
                    onChange={this.onChangeFormData}
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="slug">Slug</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    name="slug"
                    value={this.state.jobFormData.slug}
                    onChange={this.onChangeFormData}
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="statusId">StatusId</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    name="statusId"
                    value={this.state.jobFormData.statusId}
                    onChange={this.onChangeFormData}
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="skills">Skills</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="skills"
                    name="skills"
                    value={this.state.jobFormData.skills}
                    onChange={this.onChangeFormData}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-light bg-dark rounded-pill"
                  id="cancelJobEdit"
                  style={{ marginTop: "5px" }}
                  onClick={this.backToJobsPage}
                >
                  See all jobs
                </button>
                <button
                  type="button"
                  className="btn btn-warning rounded-pill"
                  id="createorEditJob"
                  style={{ marginTop: "5px" }}
                  onClick={this.onSave}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobForm;
