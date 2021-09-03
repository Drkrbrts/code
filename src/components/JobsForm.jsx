import React, { Component } from "react";
import * as starterService from "../services/starterService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class JobForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: this.propsToFormData(this.props),
    };
    console.log(this.state.formData, "friend form data");
  }

  propsToFormData(props) {
    const job = props.formData;
    console.log(job, "props to form data");

    const newData = {
      title: "string",
      description: "string",
      summary: "string",
      pay: "string",
      slug: "string",
      statusId: "NotSet",
      techCompanyId: 0,
      skills: ["string"],
    };
    return newData;
  }

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData, [inputName]: newValue };

      formData[inputName] = newValue;

      return { formData };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newPerson = { ...this.state.formData };
    console.log(newPerson, "new person");
    if (this.state.formData.id) {
      starterService
        .updateFriend(newPerson)
        .then(this.onUpdateFriendSuccess)
        .catch(this.onUpdateFriendError);
    } else {
      starterService
        .addFriend(this.state.formData)
        .then(this.onSubmitFriendSuccess)
        .catch(this.onSubmitFriendError);
      console.log(this.state.formData, "on submit");
    }
  };

  onSubmitFriendSuccess = (response) => {
    console.log(response, "Add Friend Success");
    toast.success("Add Friend Success", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.onSubmit(response);
  };

  onSubmitFriendError = (error) => {
    console.error(error);
    toast.error("Fill out all required inputs", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onUpdateFriendSuccess = (response) => {
    this.props.onSubmit(this.state.formData);
  };

  onUpdateFriendError = (error) => {
    console.error(error);
  };

  onCancel = (e) => {
    e.preventDefault();
    this.props.onCancel();
  };

  onDelete = (e) => {
    e.preventDefault();

    starterService
      .deleteFriend(this.state.formData.id)
      .then(this.onDeleteSuccess)
      .catch(this.onDeleteError);
  };

  onDeleteSuccess = (response) => {
    this.props.onDelete(this.state.formData);
  };

  onDeleteError = (error) => {
    console.error(error);
  };

  render() {
    return (
      <>
        <form className="form-container m-4 col">
          <h1 className="form-title">New Friend</h1>
          <div className="form-group my-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Add name"
              value={this.state.formData.title}
              onChange={this.onFormFieldChange}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              className="form-control"
              name="bio"
              placeholder="Bio"
              value={this.state.formData.bio}
              onChange={this.onFormFieldChange}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="summary">Summary</label>
            <input
              type="text"
              className="form-control"
              name="summary"
              placeholder="Enter Summary"
              value={this.state.formData.summary}
              onChange={this.onFormFieldChange}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="headline">Headline</label>
            <input
              type="text"
              className="form-control"
              name="headline"
              placeholder="Headline"
              value={this.state.formData.headline}
              onChange={this.onFormFieldChange}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="slug">Slug</label>
            <input
              type="text"
              className="form-control"
              name="slug"
              placeholder="Unique Identifier"
              value={this.state.formData.slug}
              onChange={this.onFormFieldChange}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="status">Status Id</label>
            <input
              type="text"
              className="form-control"
              name="statusId"
              placeholder="Active"
              value={this.state.formData.statusId}
              onChange={this.onFormFieldChange}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="avatar">Image URL</label>
            <input
              type="text"
              className="form-control"
              name="primaryImage"
              placeholder="Image URL"
              value={this.state.formData.primaryImage.imageUrl}
              onChange={this.onFormFieldChange}
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-primary submit mx-2"
            onClick={this.onSubmit}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-warning cancel mx-2"
            onClick={this.onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-danger delete mx-2"
            onClick={this.onDelete}
          >
            Delete
          </button>
        </form>
      </>
    );
  }
}

export default JobForm;
