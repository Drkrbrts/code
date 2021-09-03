import React from "react";
import * as jobServices from "../auth/jobServices";
import { toast } from "react-toastify";
import { toInteger } from "lodash";

class AddJob extends React.Component {
  state = {
    job: {
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      statusId: "",
      techCompanyId: 0,
      skills: [],
    },
    updateId: -1,
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      jobServices
        .getJob(this.props.match.params.id)
        .then(this.onGetJobSuccess)
        .catch(this.onGetJobError);
    }
  }

  onGetJobSuccess = (response) => {
    console.log(response);
    var jobData = response.data.item;
    this.setState((prevState) => {
      var newState = { ...prevState };
      newState.updateId = jobData.id;
      newState.job.title = jobData.title;
      newState.job.description = jobData.description;
      newState.job.summary = jobData.summary;
      newState.job.pay = jobData.pay;
      newState.job.techCompanyId = jobData.techCompany.id;
      newState.job.slug = jobData.slug;
      newState.job.statusId = jobData.statusId;
      newState.job.skills = jobData.skills.map((x) => x.name);
      return { job: newState.job, updateId: newState.updateId };
    }, this.stateChanged);
  };

  stateChanged = () => {
    console.log("state changed", this.state.job);
  };

  onGetJobError = (err) => {
    console.log({ error: err });
  };

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    if (name === "techCompanyId") {
      value = toInteger(value);
    }
    if (name === "skills") {
      value = value.split(" ");
    }
    console.log("Value:", value);
    this.setState((prevState) => {
      var newJob = { ...prevState.job };
      newJob[name] = value;
      return { job: newJob };
    }, this.stateChanged);
  };

  onFormSubmitClick = (e) => {
    e.preventDefault();
    console.log("form was clicked", this.state.job);
    if (this.state.updateId < 0) {
      jobServices
        .postJob(this.state.job)
        .then(this.onPostSuccess)
        .catch(this.onPostError);
    } else {
      jobServices
        .updateJob(this.state.job, this.state.updateId)
        .then(this.onUpdateSuccess)
        .catch(this.onUpdateError);
    }
  };

  onPostSuccess = (response) => {
    console.log(response.data.item);
    this.setState((prevState) => {
      var updateId = { ...prevState.updateId };
      updateId = response.data.item;
      return { updateId };
    }, this.stateChanged);
    toast.success("Post Job Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onPostError = (err) => {
    console.log({ error: err });
    toast.error("Post Job Error!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  stateChanged = () => {
    console.log("New State", this.state.job);
  };

  onUpdateSuccess = (response) => {
    console.log(response);
    toast.success("Update Job Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onUpdateError = (err) => {
    console.log({ error: err });
    toast.error("Update Job Error!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Add Job</h1>
          <form>
            <div className="mb-3">
              <label
                htmlFor="title"
                className="form-label"
                onChange={this.onChange}
              >
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                aria-describedby="emailHelp"
                onChange={this.onChange}
                value={this.state.job.title}
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
                onChange={this.onChange}
                value={this.state.job.description}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="summary">
                Summary
              </label>
              <input
                type="text"
                className="form-control"
                id="summary"
                name="summary"
                onChange={this.onChange}
                value={this.state.job.summary}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="slug">
                Slug
              </label>
              <input
                type="text"
                className="form-control"
                id="slug"
                name="slug"
                onChange={this.onChange}
                value={this.state.job.slug}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pay">Pay</label>
              <input
                type="text"
                className="form-control"
                id="pay"
                name="pay"
                onChange={this.onChange}
                value={this.state.job.pay}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="statusId">Status Id</label>
              <input
                type="text"
                className="form-control"
                id="statusId"
                name="statusId"
                onChange={this.onChange}
                value={this.state.job.statusId}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="techCompanyId">Tech Company</label>
              <select
                className="form-control"
                name="techCompanyId"
                id="techCompanyId"
                onChange={this.onChange}
                /* defaultValue={{ label: "Select Company", value: "" }} */
                value={this.state.job.techCompanyId}
              >
                <option value="">Select Company</option>
                <option value="26780">Tesla</option>
                <option value="26781">Microsoft</option>
                <option value="26779">Google</option>
                <option value="26778">Qualcomm</option>
                <option value="26782">Apple</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                className="form-control"
                id="skills"
                name="skills"
                onChange={this.onChange}
                value={this.state.job.skills.join(" ")}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onFormSubmitClick}
            >
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddJob;
