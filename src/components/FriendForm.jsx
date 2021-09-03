import React from "react";
import { withRouter } from "react-router-dom";
import friendService from "../services/friendService";
import { toast } from "react-toastify";
import "./compStyle.css";

class FriendForm extends React.Component {
  state = {
    formData: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      primaryImage: "",
    },
    isUpdate: false,
  };

  componentDidMount() {
    let friendId = this.props.match.params.friendId;
    let intId = parseInt(friendId);
    if (isNaN(intId)) {
      // console.log("this is adding a friend");
      return;
    } else {
      // console.log("update this id and state");
      friendService
        .getById(friendId)
        .then(this.onGetByIdSuccess)
        .catch(this.onGetByIdError);
    }
  }

  onGetByIdSuccess = (response) => {
    // console.log(response.data.item);
    let UpdateData = response.data.item;
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      let isUpdate = { ...prevState.isUpdate };
      formData.title = UpdateData.title;
      formData.bio = UpdateData.bio;
      formData.summary = UpdateData.summary;
      formData.headline = UpdateData.headline;
      formData.slug = UpdateData.slug;
      formData.statusId = UpdateData.statusId;
      formData.primaryImage = UpdateData.primaryImage.imageUrl;
      isUpdate = true;
      return { formData, isUpdate };
    });
  };

  onGetByIdError = (response) => {
    console.log(response);
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let NewValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData[inputName] = NewValue;
      return { formData };
    });
  };

  onRegisterClick = () => {
    let currentFormData = this.state.formData;
    friendService
      .add(currentFormData)
      .then(this.onAddSuccess)
      .catch(this.onAddError);
  };

  onAddSuccess = (response) => {
    console.log(response);
    toast.success("Friend Registration Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.history.push("/friends");
  };
  onAddError = (response) => {
    console.log(response);
    toast.warn(`${response.response.data.errors}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onUpdateClick = () => {
    let friendId = this.props.match.params.friendId;
    let currentFormData = this.state.formData;
    // console.log(friendId);
    // console.log(currentFormData);
    friendService
      .update(friendId, currentFormData)
      .then(this.onUpdateSuccess)
      .catch(this.onUpdateError);
  };

  onUpdateSuccess = (response) => {
    console.log(response);
    toast.success("Friend Update Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.history.push("/friends");
  };
  onUpdateError = (response) => {
    console.log(response);
    toast.warn(`${response.response.data.errors}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            {this.state.isUpdate ? (
              <strong className="navbar-brand" href="#">
                Update Friend
              </strong>
            ) : (
              <strong className="navbar-brand" href="#">
                Add Friend
              </strong>
            )}
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-6 p-5">
              <div className="card">
                <form className="p-5">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      placeholder="Terry Hoitz"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.title}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bio" className="form-label">
                      Bio
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bio"
                      name="bio"
                      placeholder="Is a New York cop"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.bio}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="summary" className="form-label">
                      Summary
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="summary"
                      name="summary"
                      placeholder="He accidentally shot Derek Jeter on duty at a baseball game and then he thought his career had come to a dead end"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.summary}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="headline" className="form-label">
                      Headline
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="headline"
                      name="headline"
                      placeholder="The Other Guys"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.headline}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="slug" className="form-label">
                      Slug
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="slug"
                      name="slug"
                      placeholder="Terry@TheOtherGuys.com"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.slug}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="statusId" className="form-label">
                      Status
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="statusId"
                      name="statusId"
                      placeholder="Not Set"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.statusId}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="primaryImage" className="form-label">
                      Image Url
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="primaryImage"
                      name="primaryImage"
                      placeholder="https://bit.ly/3x5DWri"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.primaryImage}
                    />
                  </div>
                  {this.state.isUpdate ? (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.onUpdateClick}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.onRegisterClick}
                    >
                      Register
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(FriendForm);
