import React from "react";
import * as jobService from "../../services/jobsServices";
import UserNav from "../UserNav";
/*To Do:
-Job fields must work, similiar to adding friend form
-assign techCo in option menu to appropiate id. 
-Have Fun :)
*/
class CreateJob extends React.Component {
  state = {
    formData: {
      title: "Security",
      description: "Full-Time",
      summary: "Manage a team, patrol, and supervise",
      pay: "$70,000",
      slug: "BWSecurity01",
      statusId: "Active",
      techCompanyId: "",
      skills: ["Communication"],
    },
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    // console.log('field',e.currentTarget)
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    console.log(newValue);
    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onSubmitClick = (e) => {
    e.preventDefault();
    var copy = { ...this.state.formData };
    let data = {
      title: copy.time,
      description: copy.description,
      summary: copy.summary,
      pay: copy.pay,
      slug: copy.slug,
      statusId: copy.statusId,
      techCompanyId: copy.techCompanyId,
    };
    if (data.techCompany === "Black Rifle Coffee Co.") {
      data.techCompanyId = "27927";
    }
    if (data.techCompany === "Gordon Ramsey's Deli Shop") {
      data.techCompanyId = "27971";
    }
    if (data.techCompany === "Good Doggo Training") {
      data.techCompanyId = "27934";
    }
    if (data.techCompany === "Black Water Security") {
      data.techCompanyId = "27932";
    }
    if (data.techCompany === "Sparkling Water Co.") {
      data.techCompanyId = "27930";
    }
    jobService
      .createJob(data)
      .then(this.onCreateJobSuccess)
      .catch(this.onCreateJobError);
    console.log("Data", copy);
  };

  onCreateJobSuccess = (response) => {
    //go friends page
    console.log("Edit successful", response);
    // this.props.history.push("/jobs/1");
  };
  onCreateJobError = (response) => {
    console.warn({ error: response });
  };

  render() {
    return (
      <React.Fragment>
        <UserNav />
        <main role="main">
          <div className="container col-12 mt-5">
            <div className="row-">
              <h5>
                <strong>Create Job</strong>
              </h5>
              <div className="col-md-4 pd-5 ">
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.title}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Job Description</label>
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.description}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="summary">Summary</label>
                    <input
                      type="text"
                      className="form-control"
                      name="summary"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.summary}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pay">Salary</label>
                    <input
                      type="text"
                      className="form-control"
                      name="pay"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.pay}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="slug">Slug</label>
                    <input
                      type="text"
                      className="form-control"
                      name="slug"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.slug}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      name="status"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.statusId}
                    />
                  </div>
                  {/* <div className="form-group">
                    <label htmlFor="techCoId">Tech Company ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="techCoId"
                      onChange={this.onFormFieldChanged}
                      value={this.state.techCompanyId}
                    />
                  </div> */}
                  <div className="form-group">
                    <label htmlFor="company">Tech Company</label>
                    <select
                      className="form-control"
                      name="company"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.techCompanyId}
                    >
                      <option>Select</option>
                      <option>Black Rifle Coffee Co.</option>
                      <option>Sparkling Water Co.</option>
                      <option>Black Water Security</option>
                      <option>Good Doggo Training</option>
                      <option>Gordon Ramsey's Deli Shop</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="skills">Type of Skills</label>
                    <input
                      type="text"
                      className="form-control"
                      name="skills"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.skills}
                    />
                  </div>
                  <div className="col-md-4">
                    <button
                      type="submit"
                      className="btn btn-outline-primary"
                      //   value="registration"
                      onClick={this.onSubmitClick}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <div></div>
      </React.Fragment>
    );
  }
}
export default CreateJob;
