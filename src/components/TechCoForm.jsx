import React from "react";

export default class TechCoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      techCo: this.checkForEdit(this.props),
    };
  }

  checkForEdit = (props) => {
    if (this.props.friendToEdit) {
      return JSON.parse(JSON.stringify(props.friendToEdit));
    } else {
      return {
        name: "",
        profile: "",
        summary: "",
        headline: "",
        contactInformation: "",
        slug: "",
        statusId: "Active",
        images: null,
        urls: null,
        tags: null,
        friends: null,
      };
    }
  };

  onFormFieldChange = (e) => {
    let newValue = e.currentTarget.value;
    let inputName = e.currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.techCo };

      formData[inputName] = newValue;

      return { techCo: formData };
    });
  };

  onSaveClick = (e) => {
    e.preventDefault();
    this.props.onSave(this.state.techCo);
  };

  render() {
    return (
      <form
        id="techCompanyCreateEditForm"
        className="container shadow border border-dark bg-light col-6 rounded"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.techCo.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profile">Profile</label>
          <input
            type="text"
            name="profile"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.techCo.profile}
          />
        </div>
        <div className="form-group">
          <label htmlFor="smmary">Summary</label>
          <input
            type="text"
            name="summary"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.techCo.summary}
          />
        </div>
        <div className="form-group">
          <label htmlFor="headline">Headline</label>
          <input
            type="text"
            name="headline"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.techCo.headline}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactEmail">Contact Email</label>
          <input
            type="text"
            name="contactEmail"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.techCo.contactInformation}
          />
        </div>
        <div className="form-group">
          <label htmlFor="logoUrl">Logo Image Url</label>
          <input
            type="url"
            name="logoUrl"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.techCo.imageUrl}
          />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            name="slug"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.techCo.slug}
          />
        </div>
        <div className="form-group">
          <label htmlFor="statusId">StatusId</label>
          <div className="form-row">
            <select
              name="statusId"
              className="form-control"
              onChange={this.onFormFieldChange}
              value={this.state.techCo.satusId}
            >
              <option>Active</option>
              <option>NotSet</option>
              <option>Deleted</option>
              <option>Flagged</option>
            </select>
            <button
              id="createTechCompanyButton"
              type="submit"
              className="btn btn-primary ml-auto col-3"
            >
              Create
            </button>
            <button
              id="confirmEditTechCompanyButton"
              type="submit"
              className="btn btn-primary ml-auto col-3 d-none"
            >
              Edit
            </button>
            <button
              id="cancelEditTechCompanyButton"
              type="submit"
              className="btn btn-danger ml-auto col-3 d-none"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }
}
