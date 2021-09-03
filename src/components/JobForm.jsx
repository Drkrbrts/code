import React from "react";
import jobsService from "../services/jobsServices";

class JobForm extends React.Component {
  state = {
    formData: {
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      statusId: "",
      techCompanyId: 0,
      skills: "",
    },
  };

  componentDidMount() {
    const { state: locState } = this.props.location;
    if (!locState || locState.type !== "EDIT_JOB") {
      return;
    }
    console.log(locState.id);
    jobsService
      .getById(locState.id)
      .then(this.onGetByIdSuccess)
      .catch(this.onGetByIdError);
  }
  onGetByIdSuccess = (response) => {
    let jobItem = response.data.item;
    console.log(jobItem);

    const job = {
      title: jobItem.title,
      description: jobItem.description,
      summary: jobItem.summary,
      pay: jobItem.pay,
      slug: jobItem.slug,
      statusId: jobItem.statusId,
      techCompanyId: jobItem.techCompany.id,
      id: jobItem.id,
    };

    const skillsArray = jobItem.skills;
    const skills = [];
    for (let i = 0; skillsArray.length > i; i++) {
      const currentSkill = skillsArray[i];
      skills.push(currentSkill.name);
    }
    console.log(skills);
    job.skills = skills.join(",");
    console.log("new job", job);
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData = job;
      return { formData };
    });
  };

  onGetByIdError = (Err) => {
    console.log(Err);
  };

  onSubmitClicked = (e) => {
    e.preventDefault();

    const updateData = { ...this.state.formData };

    updateData.skills = this.state.formData.skills.split(",");

    if (
      !this.props.location.state.id ||
      this.props.location.state.type !== "EDIT_JOB"
    ) {
      jobsService
        .add(updateData)
        .then(this.onAddSuccess)
        .catch(function (response) {
          console.warn(response);
        });
    } else {
      jobsService
        .updateById(updateData)
        .then(this.onupdateByIdSuccess)
        .catch(function (response) {
          console.log(response);
        });
    }
  };

  onAddSuccess = (response) => {
    console.log({ addSuccess: response });
    this.props.history.push(`/jobs/form?jobId=${response.item}`, {
      type: "EDIT_JOB",
      id: response.item,
    });
  };
  onupdateByIdSuccess = (response) => {
    console.log({ updateSuccess: response });
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;
    let inputName = currentTarget.name;
    console.log({ newValue, currentTarget });
    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  render() {
    return (
      <>
        <header className="py-3 mb-4 border-bottom">
          <div className="container d-flex flex-wrap justify-content-center">
            <p
              className="
        d-flex
        align-items-center
        mb-3 mb-lg-0
        me-lg-auto
        text-dark text-decoration-none
      "
            >
              Add or Edit Job
            </p>
          </div>
        </header>

        <form id="formTemplate">
          <div className="row g-3 align-items-center">
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputTitleLabel" className="col-form-label">
                  Title
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="title"
                  id="inputTitle"
                  className="form-control"
                  name="title"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.title}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputBioLabel" className="col-form-label">
                  Description
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="description"
                  id="inputDescription"
                  className="form-control"
                  name="description"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.description}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputSummaryLabel" className="col-form-label">
                  Summary
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Summary"
                  id="inputSummary"
                  className="form-control"
                  name="summary"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.summary}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputHeadlineLabel" className="col-form-label">
                  Pay
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Pay"
                  id="inputPay"
                  className="form-control"
                  name="pay"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.pay}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputSlugLabel" className="col-form-label">
                  Slug
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Slug"
                  id="inputSlug"
                  className="form-control"
                  name="slug"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.slug}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputStatusLabel" className="col-form-label">
                  Status
                </label>
              </div>
              <div className="col-sm-5">
                <select
                  className="form-control"
                  name="statusId"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.statusId}
                >
                  <option>Select Status</option>
                  <option>Active</option>
                  <option>NotSet</option>
                  <option>Deleted</option>
                  <option>Flagged</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label htmlFor="inputSkillsLabel" className="col-form-label">
                  Skills
                </label>
              </div>
              <div className="col-sm-5">
                <input
                  type="Skills"
                  id="inputSkills"
                  className="form-control"
                  name="skills"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.skills}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <label
                  htmlFor="inputTechCompanyIdLabel"
                  className="col-form-label"
                >
                  Tech Company
                </label>
              </div>
              <div className="col-sm-5">
                <select
                  type="techCompanyId"
                  id="inputtechCompanyId"
                  className="form-control"
                  name="techCompanyId"
                  onChange={this.onFormFieldChange}
                  value={this.state.formData.techCompanyId}
                >
                  <option>Select Status</option>
                  <option value="25912">Facebook</option>
                  <option value="25910">Google</option>
                  <option value="25908">Walmart</option>
                  <option value="25905">amazon</option>
                  <option value="25904">Microsoft</option>
                  <option value="25901">Spotify</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <button
                type="button"
                className="btn btn-primary sumbitButton"
                onClick={this.onSubmitClicked}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default React.memo(JobForm);
