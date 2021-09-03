import React, { Component } from "react";
import { createJob, updateJob } from "../services/jobService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class JobsUpdate extends Component {
  state = {
    jobData: {
      title: "",
      techCompanyId: 0,
      description: "",
      summary: "",
      pay: "",
      skills: "",
      slug: "",
      statusId: "",
    },
  };
  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    console.log({ newValue, currentTarget });

    this.setState(() => {
      let jobData = { ...this.state.jobData };
      jobData[inputName] = newValue;
      console.log(jobData);
      return { jobData };
    });
  };

  onSubmitButtonClicked = () => {
    console.log(this.state.jobData);
    // createJob(this.state.jobData)
    //   .then(this.onCreateJobSuccess)
    //   .catch(this.onCreateJobError);
  };
  onCreateJobSuccess = (response) => {
    console.log(response);
    const notify = () => {
      toast.success("A job post was created");
    };
    notify();
  };
  onCreateJobError = (err) => {
    console.log(err);
    const notify = () => {
      toast.error("oh no, it appears there's an error in your form");
    };
    notify();
  };

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="col-lg-4 p-3">
            <form>
              <h3>Edit Job Posting</h3>

              <div className="container">
                <div className="form-group">
                  <label htmlFor="form-label">Enter Role</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Role"
                    onChange={this.onFormFieldChange}
                    value={this.state.jobData.title}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-label">Select</label>
                  <select
                    component="select"
                    name="techCompanyId"
                    className="form-control"
                    onChange={this.onFormFieldChange}
                    value={this.state.jobData.techCompanyId}
                  >
                    <option value="">Please select company</option>
                    <option value="26184">Company A</option>
                    <option value="26185">Company B</option>
                    <option value="26186">Company C</option>
                    <option value="26187">Company D</option>
                    <option value="26188">Company E</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="form-label">Job Summary</label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="description"
                    onChange={this.onFormFieldChange}
                    value={this.state.jobData.description}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-label">Job Summary</label>
                  <input
                    type="text"
                    name="summary"
                    className="form-control"
                    placeholder="summary"
                    onChange={this.onFormFieldChange}
                    value={this.state.jobData.summary}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-label">Pay</label>
                  <input
                    type="number"
                    name="pay"
                    className="form-control"
                    placeholder="Enter pay"
                    onChange={this.onFormFieldChange}
                    value={this.state.jobData.pay}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-label">Skills</label>
                  <input
                    type="string"
                    name="skills"
                    className="form-control"
                    placeholder="Enter skills"
                    onChange={this.onFormFieldChange}
                    value={this.state.jobData.skills}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-label">Slug</label>
                  <input
                    type="text"
                    name="slug"
                    className="form-control"
                    placeholder="Enter slug"
                    onChange={this.onFormFieldChange}
                    value={this.state.jobData.slug}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-label">Select</label>
                  <select
                    component="select"
                    name="statusId"
                    className="form-control"
                    onChange={this.onFormFieldChange}
                    value={this.state.jobData.statusId}
                  >
                    <option value="">Select status</option>
                    <option value="NotSet">NotSet</option>
                    <option value="Active">Active</option>
                    <option value="Deleted">Deleted</option>
                    <option value="Flagged">Flagged</option>
                  </select>
                </div>
                <div style={{ padding: "5px" }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onSubmitButtonClicked}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
export default JobsUpdate;
