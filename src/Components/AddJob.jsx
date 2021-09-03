import React from "react";
import * as jobService from "../services/jobService";

class AddJob extends React.Component {
  state = {
    newJob: {
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      status: "",
      skills: { name: "" },
      techCompany: { id: "" },
    },
  };

  componentDidMount() {
    if (
      this.props.location.state &&
      this.props.location.state.type === "EDIT_JOB"
    ) {
      let newJob = this.props.location.state.payload;

      this.setState(
        () => {
          return { newJob };
        },
        () => console.log(newJob)
      );
    }
  }

  onFormFieldChanged = (e) => {
    console.log(e);
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    if (this.state.newJob === null) {
      this.setState(() => {
        let newState = {};
        if (inputName === "skills") {
          newState[inputName] = [newValue];
        } else if (inputName === "techCompanyId") {
          newState[inputName] = parseInt(newValue);
        } else {
          newState[inputName] = newValue;
        }

        return newState;
      });
    } else {
      this.setState(() => {
        let newJob = this.state.newJob;
        newJob[inputName] = newValue;

        return newJob;
      });
    }
  };

  onSubmitHandle = (e) => {
    e.preventDefault();
    if (this.state.newJob.id) {
      jobService
        .editJob(this.state.newJob)
        .then(this.onEditJobSuccess)
        .catch(this.onEditJobError);
    } else {
      jobService
        .addJob(this.state)
        .then(this.onAddJobSuccess)
        .catch(this.onAddJobError);
    }
  };

  onEditJobSuccess = (response) => {
    console.log(response, "edit job success");
  };

  onEditJobError = (error) => {
    console.log(error, "edit job error");
  };

  onAddJobSuccess = (response) => {
    console.log(response, "job added");
  };

  onAddJobError = (error) => {
    console.log(error, "job did not add");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="md-4 p-3">
            <form>
              <div className="md-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="title"
                  value={this.state.newJob.title}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="description"
                  value={this.state.newJob.description}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Summary</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="summary"
                  value={this.state.newJob.summary}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Pay</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="pay"
                  value={this.state.newJob.pay}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Slug</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="slug"
                  value={this.state.newJob.techCompany.slug}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="statusId"
                  value={this.state.newJob.statusId}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Skills</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="skills"
                  value={this.state.newJob.skills.name}
                />
              </div>
              {/* <div>
                <label for="exampleDataList" class="form-label">
                  Datalist example
                </label>
                <input
                  class="form-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Type to search..."
                ></input>
                <datalist id="datalistOptions">
                  <option value="Apple" name="apple" />
                  <option value="Twitter" name="twitter" />
                  <option value="Facebook" name="facebook" />
                  <option value="Microsoft" name="microsoft" />
                  <option value="Samsung" name="samsung" />
                </datalist>
              </div> */}
              <div className="mb-3">
                <label className="form-label">Tech Company ID</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="techCompany"
                  value={this.state.newJob.techCompany.id}
                />
              </div>
              {/* <div className="mb-3">
                <label className="form-label">Primary Image</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="primaryImage"
                  // value={this.state.newJob.techCompany.images.imageUrl}
                />
              </div> */}
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onSubmitHandle}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddJob;
