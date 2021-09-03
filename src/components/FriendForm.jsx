import React from "react";

export default class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: this.checkForEdit(this.props),
    };
  }
  checkForEdit = (props) => {
    if (this.props.friendToEdit) {
      return JSON.parse(JSON.stringify(props.friendToEdit));
    } else {
      return {
        title: "",
        bio: "",
        summary: "",
        headline: "",
        slug: "",
        statusId: "Active",
        primaryImage: "",
      };
    }
  };

  onFormFieldChange = (e) => {
    let newValue = e.currentTarget.value;
    let inputName = e.currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.friend };

      formData[inputName] = newValue;

      return { friend: formData };
    });
  };

  onSaveClick = (e) => {
    e.preventDefault();
    this.props.onSave(this.state.friend);
  };

  render() {
    return (
      <form
        name="friendCreateEditForm"
        className="container shadow border border-dark bg-light col-6 rounded"
      >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.friend.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            name="bio"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.friend.bio}
          />
        </div>
        <div className="form-group">
          <label htmlFor="summary">Summary</label>
          <input
            type="text"
            name="summary"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.friend.summary}
          />
        </div>
        <div className="form-group">
          <label htmlFor="headline">Headline</label>
          <input
            type="text"
            name="headline"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.friend.headline}
          />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            name="slug"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.friend.slug}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPrimaryImage">Primary Image</label>
          <input
            type="text"
            name="primaryImage"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.friend.primaryImage}
          />
        </div>
        <div className="form-group">
          <label htmlFor="statusId">Status ID</label>
          <select
            name="statusId"
            className="form-control me-auto col-4"
            onChange={this.onFormFieldChange}
            value={this.state.friend.statusId}
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
