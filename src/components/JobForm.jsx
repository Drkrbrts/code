import React from "react";

class JobForm extends React.Component {
  render() {
    return (
      <form
        id="formTemplate"
        // className={this.props.location.search ? {} : "d-none"}
      >
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
                onChange={this.props.onFormFieldChange}
                value={this.props.formData.title}
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
                onChange={this.props.onFormFieldChange}
                value={this.props.formData.description}
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
                onChange={this.props.onFormFieldChange}
                value={this.props.formData.summary}
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
                onChange={this.props.onFormFieldChange}
                value={this.props.formData.pay}
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
                onChange={this.props.onFormFieldChange}
                value={this.props.formData.slug}
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
                onChange={this.props.onFormFieldChange}
                value={this.props.formData.statusId}
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
                onChange={this.props.onFormFieldChange}
                value={this.props.formData.skills}
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
                onChange={this.props.onFormFieldChange}
                value={this.props.formData.techCompanyId}
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
              onClick={this.props.onSubmitClicked}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default React.memo(JobForm);
