import React from "react";
import jobsService from "../services/jobs";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

class JobForm extends React.Component {
  state = {
    jobForm: {
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      techCompanyId: 0,
      skills: [],
    },
  };

  componentDidMount() {
    if (this.props.location.state) {
      let locState = this.props.location.state;
      if (locState.type === "ADD_TO_JOBFORM") {
        this.setState({ jobForm: locState.payload });
      }
    }
  }

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let jobForm = { ...this.state.jobForm };
      jobForm[inputName] = newValue;

      return { jobForm };
    });
  };

  addBtnClick = () => {
    let payload = {
      title: this.state.jobForm.title,
      description: this.state.jobForm.description,
      summary: this.state.jobForm.summary,
      pay: this.state.jobForm.pay,
      slug: this.state.jobForm.slug,
      statusId: "active",
      techCompanyId: this.state.jobForm.techCompanyId,
      skills: [this.state.jobForm.skills],
    };

    jobsService.add(payload).then(this.addSuccess).catch(this.addError);
  };

  addSuccess = (response) => {
    console.log(response.data.item);
    let payload = {
      title: this.state.jobForm.title,
      description: this.state.jobForm.description,
      summary: this.state.jobForm.summary,
      pay: this.state.jobForm.pay,
      slug: this.state.jobForm.slug,
      statusId: "active",
      techCompanyId: this.state.jobForm.techCompanyId,
      skills: [this.state.jobForm.skills],
    };
    this.props.history.push("/jobs/" + response.data.item + "/edit", {
      type: "ADD_TO_JOBFORM",
      payload: payload,
    });
    toast.success(response.data.item);
  };

  addError = (response) => {
    console.error(response);
  };

  updateBtnClicked = () => {
    let id = this.props.match.params.id;
    let payload = {
      title: this.state.jobForm.title,
      description: this.state.jobForm.description,
      summary: this.state.jobForm.summary,
      pay: this.state.jobForm.pay,
      slug: this.state.jobForm.slug,
      statusId: "active",
      techCompanyId: this.state.jobForm.techCompanyId,
      skills: [this.state.jobForm.skills],
    };
    jobsService.edit(id, payload).then(this.editSuccess).catch(this.editError);
  };

  editSuccess = (response) => {
    toast.success("Updated");
    this.props.history.push("/jobs");
  };

  editError = (response) => {
    console.error(response);
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={this.onFormFieldChange}
              value={this.state.jobForm.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={this.onFormFieldChange}
              value={this.state.jobForm.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="summary">Summary</label>
            <input
              type="text"
              className="form-control"
              id="summary"
              name="summary"
              onChange={this.onFormFieldChange}
              value={this.state.jobForm.summary}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pay">Pay</label>
            <input
              type="text"
              className="form-control"
              id="pay"
              name="pay"
              onChange={this.onFormFieldChange}
              value={this.state.jobForm.pay}
            />
          </div>
          <div className="form-group">
            <label htmlFor="slug">Slug</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              name="slug"
              onChange={this.onFormFieldChange}
              value={this.state.jobForm.slug}
            />
          </div>
          <div className="form-group">
            <label htmlFor="techCompanyId">Tech Company Id</label>
            <input
              type="number"
              className="form-control"
              id="techCompanyId"
              name="techCompanyId"
              onChange={this.onFormFieldChange}
              value={this.state.jobForm.techCompanyId}
            />
          </div>
          <div className="form-group">
            <label htmlFor="skills">Skills</label>
            <input
              type="text"
              className="form-control"
              id="skilld"
              name="skills"
              onChange={this.onFormFieldChange}
              value={this.state.jobForm.skills}
            />
          </div>
        </form>
        <button
          type="button"
          className="btn btn-primary"
          onClick={
            this.props.match.params?.id
              ? this.updateBtnClicked
              : this.addBtnClick
          }
        >
          {this.props.match.params?.id ? "Update" : "Submit"}
        </button>
      </React.Fragment>
    );
  }
}

export default withRouter(JobForm);
