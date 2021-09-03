import React from "react";
import * as userService from "../services/userService";

class AddFriends extends React.Component {
  state = {
    formData: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "Active",
      primaryImage: "",
    },
  };
  // componentDidMount = () => {};

  onAddFriendFormSubmitClick = () => {
    userService
      .newFriendPost(this.state.formData)
      .then(this.onAddFriendFormSubmitClickSuccess)
      .catch(this.onAddFriendFormSubmitClickError);
  };

  onAddFriendFormSubmitClickSuccess = (response) => {
    console.log("addfriendFORMsubmitsuccess", response);
    console.log(response.data.item);
  };

  onAddFriendFormSubmitClickError = (err) => {
    console.log("onAddFriendFormSubmitClickError", err);
  };

  onFriendFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  resetForm = () => {
    this.setState({
      formData: {
        title: "",
        bio: "",
        summary: "",
        headline: "",
        slug: "",
        statusId: "Active",
        primaryImage: "",
      },
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row col-12 p-5">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Title"
                onChange={this.onFriendFormFieldChanged}
                value={this.state.formData.title}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="bio"
                name="bio"
                placeholder="Bio"
                onChange={this.onFriendFormFieldChanged}
                value={this.state.formData.bio}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="summary"
                name="summary"
                placeholder="Summary of Friend"
                onChange={this.onFriendFormFieldChanged}
                value={this.state.formData.summary}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="headline"
                name="headline"
                placeholder="Headline"
                onChange={this.onFriendFormFieldChanged}
                value={this.state.formData.headline}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="slug"
                name="slug"
                placeholder="Slug"
                onChange={this.onFriendFormFieldChanged}
                value={this.state.formData.slug}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="statusId"
                name="statusId"
                placeholder="Status"
                value={"Active"}
                readOnly
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control mb-3"
                id="primaryImage"
                name="primaryImage"
                placeholder="imgUrl"
                onChange={this.onFriendFormFieldChanged}
                value={this.state.formData.primaryImage}
              />
            </div>

            <div className="form-group p-2">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onAddFriendFormSubmitClick}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        );
      </>
    );
  }
}

export default AddFriends;
