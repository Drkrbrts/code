import React from "react";
import * as jobsService from "../services/jobsService";

class Jobs extends React.Component {
  state = {
    formData: {
      title: "",
      description: "",
      summary: "",
      pay: Number(""),
      slug: "",
      statusId: "",
      techCompanyId: "",
      skills: [""],
    },
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    // console.log(currentTarget);
    let newValue = currentTarget.value;
    // console.log(newValue);
    let inputName = currentTarget.name;
    // console.log(inputName);

    this.setState(() => {
      let formData = { ...this.state.formData };
      //   let skillsArray = [];

      formData[inputName] = newValue;
      //   skillsArray.push(formData.skills);

      console.log(formData);
      return { formData };
    });
  };

  onSubmitClicked = () => {
    console.log("submit clicked", this.state);

    jobsService
      .addJob(this.state.formData)
      .then(this.onAddJobSuccess)
      .catch(this.onAddJobError);
  };

  onAddJobSuccess = (response) => {
    console.log(response, "onAddJobSuccess");
  };

  onAddJobError = (error) => {
    console.warn(error, "onAddJobError");
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
          <input
            type="text"
            className="form-control"
            name="techCompanyId"
            onChange={this.onFormFieldChange}
            value={this.state.formData.techCompanyId}
          />
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
        </div>
      </React.Fragment>
    );
  }
}

export default Jobs;
