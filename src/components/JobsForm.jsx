import React from "react";

function JobsForm(props) {
  const onFormFieldChange = (e) => {
    // console.log("onFormFieldChange", e.currentTarget.value);
    let currentTarget = e.currentTarget;
    props.onChangeRequested(currentTarget);
  };
  const onSave = (e) => {
    console.log("onSave firing");
    e.preventDefault();
    props.onSaveRequested();
  };
  const onCancel = (e) => {
    console.log("onCancel firing");
    e.preventDefault();
    props.onCancelRequested();
  };

  //Differences in using a function vs conditional rendering?
  const addEditButton = () => {
    if (props.formData.id) {
      return (
        <button
          className="btn btn-warning mt-2 mx-1"
          type="button"
          onClick={onSave}
        >
          Edit
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-primary mt-2 mx-1"
          type="button"
          onClick={onSave}
        >
          Add
        </button>
      );
    }
  };
  return (
    <form className="m-3">
      <div className="form-group mb-2">
        <label htmlFor="title">Job Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Enter Job Title"
          value={props.formData.title}
          onChange={onFormFieldChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="description">Job Description</label>
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Description"
          value={props.formData.description}
          onChange={onFormFieldChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="summary">Summary</label>
        <input
          type="text"
          className="form-control"
          name="summary"
          placeholder="Summary of Job Description"
          value={props.formData.summary}
          onChange={onFormFieldChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="pay">Salary</label>
        <input
          type="text"
          className="form-control"
          name="pay"
          placeholder="Salary in dollars per hour"
          value={props.formData.pay}
          onChange={onFormFieldChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="slug">Slug</label>
        <input
          type="text"
          className="form-control"
          name="slug"
          placeholder="A unique url to identify the job posting"
          value={props.formData.slug}
          onChange={onFormFieldChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="techCompanyId">Company ID</label>
        <input
          type="text"
          className="form-control"
          name="techCompanyId"
          placeholder="Your Company ID"
          value={props.formData.techCompanyId}
          onChange={onFormFieldChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="statusId">Status</label>
        <select
          name="statusId"
          className="form-control"
          value={props.formData.statusId}
          onChange={onFormFieldChange}
        >
          <option value="">Select Job Status</option>
          <option value="Active">Active</option>
          <option value="NotSet">Not Set</option>
          <option value="Deleted">Deleted</option>
          <option value="Flagged">Flagged</option>
        </select>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="skills">Skills</label>
        <textarea
          name="skills"
          cols="30"
          rows="3"
          className="form-control"
          placeholder="List skills here separated by a comma. Example: Spanish,Communcation,Accounting"
          value={props.formData.skills}
          onChange={onFormFieldChange}
        />
      </div>
      {addEditButton()}
      <button
        className="btn btn-danger mt-2 mx-2"
        type="button"
        onClick={onCancel}
      >
        Cancel
      </button>
    </form>
  );
}
export default JobsForm;
