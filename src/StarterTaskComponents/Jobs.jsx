import React from "react";
import { toast } from "react-toastify";
import * as jobsService from "../services/jobsService";
import { NavLink } from "react-router-dom";

class Jobs extends React.Component {
  state = {
    formData: {
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      statusId: "",
      techCompanyId: 0,
      skills: [],
    },
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    // console.log(currentTarget);
    let newValue = currentTarget.value;
    // console.log(newValue);
    let inputName = currentTarget.name;
    // console.log(inputName);

    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData[inputName] = newValue;

      if (inputName === "skills") {
        formData.skills = newValue.split(",");
      }

      console.log(formData);
      return { formData };
    });
  };

  onSubmitClicked = () => {
    console.log("submit clicked", this.state);

    let formData = this.state.formData;

    if (formData.id) {
      jobsService
        .updateJob(formData)
        .then(this.onUpdateJobSuccess)
        .catch(this.onUpdateJobError);
    } else {
      jobsService
        .addJob(formData)
        .then(this.onAddJobSuccess)
        .catch(this.onAddJobError);
    }
  };

  onAddJobSuccess = (response) => {
    console.log(response.data.item, "onAddJobSuccess");
    toast.success("Job has been successfully posted!");

    this.setState((prevState) => {
      let newState = { ...prevState.formData };

      newState.id = response.data.item;

      console.log({ formData: newState });
      return { formData: newState };
    });
  };

  onAddJobError = (error) => {
    console.warn(error, "onAddJobError");
    toast.error(
      "Oops! We ran into an issue posting your job. Please try again."
    );
  };

  onUpdateJobSuccess = (response) => {
    console.log(response, "onUpdateJobSuccess");
  };

  onUpdateJobError = (error) => {
    console.log(error, "onUpdateJobError");
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            border: "solid 1px lightgray",
            boxShadow: "1px",
            margin: "0 0 0 70px",
          }}
        >
          <h1 className="px-3">Add a Job</h1>
        </div>
        <div
          style={{
            border: "solid 1px lightgray",
            width: "50%",
            margin: "0 0 10px 70px",
            padding: "60px",
          }}
        >
          <label>Role</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={this.onFormFieldChange}
            value={this.state.formData.title}
          />
          <br />
          <label>Tech Company</label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="techCompanyId"
            onChange={this.onFormFieldChange}
            value={this.state.formData.techCompanyId}
          >
            <option value="">Select Tech Company</option>
            <option value="29037">Techs R' Us</option>
            <option value="29041">Mobile Solutions</option>
            <option value="29044">E-Fly on The Wall</option>
            <option value="29046">Panacea Global</option>
            <option value="29047">World Wide Web Development</option>
          </select>

          <br />
          <label>Job Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            onChange={this.onFormFieldChange}
            value={this.state.formData.description}
          />
          <br />
          <label>Job Summary</label>
          <input
            type="text"
            className="form-control"
            name="summary"
            onChange={this.onFormFieldChange}
            value={this.state.formData.summary}
          />
          <br />
          <label>Pay</label>
          <input
            type="text"
            className="form-control"
            name="pay"
            onChange={this.onFormFieldChange}
            value={this.state.formData.pay}
          />
          <br />
          <label>Skills</label>
          <input
            type="text"
            className="form-control"
            name="skills"
            onChange={this.onFormFieldChange}
            value={this.state.formData.skills}
          />
          <br />
          <label>Slug</label>
          <input
            type="text"
            className="form-control"
            name="slug"
            onChange={this.onFormFieldChange}
            value={this.state.formData.slug}
          />
          <br />
          <label>Status</label>
          <input
            type="text"
            className="form-control"
            style={{ marginBottom: "10px" }}
            name="statusId"
            onChange={this.onFormFieldChange}
            value={this.state.formData.statusId}
          />
          <br />
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.onSubmitClicked}
          >
            Submit
          </button>
          <br />
          <NavLink to="/jobs">View all job postings</NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Jobs;
