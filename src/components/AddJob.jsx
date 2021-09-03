import React from "react";
import * as jobServices from "./auth/jobServices";

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
  };

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;

    this.setState((prevState) => {
      var newJob = { ...prevState.job };
      newJob[name] = value;
      return { job: newJob };
    }, this.stateChanged);
  };

  onFormSubmitClick = (e) => {
    e.preventDefault();
    console.log("form was clicked", e);
    jobServices
      .postJob(this.state.job)
      .then(this.onPostSuccess)
      .catch(this.onPostError);
  };

  onPostSuccess(response) {
    console.log(response);
  }

  onPostError(err) {
    console.log({ error: err });
  }

  stateChanged = () => {
    console.log("New State", this.state.job);
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
              />
            </div>
            <div className="mb-3">
              <label htmlFor="techCompanyId">Tech Company</label>
              <select
                className="form-control"
                name="techCompanyId"
                id="techCompanyId"
                onChange={this.onChange}
              >
                <option value="0" selected="selected">
                  Select Company
                </option>
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
