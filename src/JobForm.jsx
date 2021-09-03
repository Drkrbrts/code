import React from "react";
import * as jobService from "./services/jobService";
import { toast, ToastContainer } from "react-toastify";

class JobForm extends React.Component {
  state = {
    formData: {
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      statusId: "",
      techCompany: {
        name: "",
        id: "",
        images: {
          imageUrl: "",
        },
      },
      skills: [],
    },
    pageTitle: "Add A Job",
  };

  onFormFieldChanged = (e) => {
    let name = e.target.name;
    let newValue = e.target.value;

    this.setState((prevState) => {
      let newState = { ...prevState.formData };
      newState[name] = newValue;
      return { formData: newState };
    });
  };

  componentDidMount() {
    if (this.props.location.state) {
      console.log("this is an edit form");
      let editJobInfo = this.props.location.state;

      let formData = {
        title: editJobInfo.title,
        description: editJobInfo.description,
        summary: editJobInfo.summary,
        pay: editJobInfo.pay,
        slug: editJobInfo.slug,
        statusId: editJobInfo.statusId,
        techCompanyId: editJobInfo.techCompany.id,
        skills: editJobInfo.skills,
      };

      this.setState(() => {
        return { formData, pageTitle: "Update Job" };
      });
    }
  }

  onSubmitBtnClick = (e) => {
    e.preventDefault();
    let jobId = this.props.match.params.id;
    let jobData = { ...this.state.formData };
    console.log(jobData.skills);
    jobData.skills = jobData.skills.split(", ");
    console.log(jobData.skills);

    if (jobId) {
      jobService
        .update(jobId, jobData)
        .then(this.onUpdateJobSuccess)
        .catch(this.onUpdateJobError);
    } else if (this.state.justAddedId) {
      jobService
        .update(this.state.justAddedId, jobData)
        .then(this.onUpdateJobSuccess)
        .catch(this.onUpdateJobError);
    } else {
      jobService
        .add(jobData)
        .then(this.onAddJobSuccess)
        .catch(this.onAddJobError);
    }
  };

  //-----Success & Error Handlers--------------------------

  onUpdateJobSuccess = (res) => {
    console.log(res);

    toast.success("Job was updated successfully :)");
  };

  onUpdateJobError = (err) => {
    console.log({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  onAddJobSuccess = (res) => {
    console.log(res);
    //change add form to update form with all the content
    this.setState(() => {
      return { justAddedId: res.data.item, pageTitle: "Update Job" };
    });
    toast.success("Job was added successfully :)");
  };

  onAddJobError = (err) => {
    console.log({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  //-------------------------------------------------------
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <form className="px-4 py-2">
          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-6">
                <div className="card">
                  <div className="card-header">
                    <h1 className="text-center">{this.state.pageTitle}</h1>
                  </div>
                  <div className="form-group m-5">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Web Developer"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.title}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      placeholder="Lorem ipsum dolor."
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.description}
                    />
                    <label htmlFor="summary">Summary</label>
                    <input
                      type="text"
                      className="form-control"
                      name="summary"
                      placeholder="Lorem ipsum dolor."
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.summary}
                    />
                    <label htmlFor="pay">Pay</label>
                    <input
                      type="text"
                      className="form-control"
                      name="pay"
                      placeholder="$100,000"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.pay}
                    />
                    <label htmlFor="slug">Website</label>
                    <input
                      type="url"
                      className="form-control"
                      name="slug"
                      placeholder="https://"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.slug}
                    />
                    <label htmlFor="status">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      name="statusId"
                      placeholder="Active"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.StatusId}
                    />
                    <label htmlFor="techCompanyId">Tech Company Id</label>
                    <input
                      type="text"
                      className="form-control"
                      name="techCompanyId"
                      placeholder="666"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.techCompanyId || ""}
                    />
                    <label htmlFor="skills">Skills</label>
                    <input
                      type="text"
                      className="form-control"
                      name="skills"
                      placeholder="react, .net. node.js"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.skills}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary form-control my-3"
                      onClick={this.onSubmitBtnClick}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default JobForm;
