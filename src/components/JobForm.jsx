import React from "react";

export default class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: this.checkForEdit(this.props),
    };
  }
  checkForEdit = (props) => {
    if (this.props.friendToEdit) {
      return JSON.parse(JSON.stringify(props.jobToEdit));
    } else {
      return {
        title: "",
        description: "",
        summary: "",
        pay: "",
        slug: "",
        statusId: "Active",
        techCompanyId: 0,
        skills: "",
      };
    }
  };
  onFormFieldChange = (e) => {
    let newValue = e.currentTarget.value;
    let inputName = e.currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      return { formData };
    });
  };

  render() {
    return (
      <form
        name="jobCreateEditForm"
        className="container shadow border border-dark bg-light col-6 rounded"
      >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.formData.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.formData.bio}
          />
        </div>
        <div className="form-group">
          <label htmlFor="summary">Summary</label>
          <input
            type="text"
            name="summary"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.formData.summary}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pay">Pay</label>
          <input
            type="text"
            name="pay"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.formData.pay}
          />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            name="slug"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.formData.slug}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPrimaryImage">Skills</label>
          <input
            type="text"
            name="primaryImage"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.formData.skills}
          />
        </div>
        <div className="form-group">
          <label htmlFor="statusId">Status ID</label>
          <select
            name="statusId"
            className="form-control me-auto col-4"
            onChange={this.onFormFieldChange}
            value={this.state.formData.statusId}
          >
            <option>Active</option>
            <option>NotSet</option>
            <option>Deleted</option>
            <option>Flagged</option>
          </select>
        </div>
        <button
          name="createFriendButton"
          type="button"
          className="btn btn-primary ml-auto col-3"
          onClick={this.onSaveClick}
        >
          Save
        </button>
        <button
          name="cancelEditFriendButton"
          type="submit"
          className="btn btn-danger ml-auto col-3"
          onClick={this.props.onCancel}
        >
          Cancel
        </button>
      </form>
    );
  }
}
