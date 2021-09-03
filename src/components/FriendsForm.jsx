import React, { Component } from "react";
import { toast } from "react-toastify";
import friendsServices from "../services/friendsServices";
import { NavLink } from "react-router-dom";

class FriendsForm extends Component {
  state = {
    updateFriend: false,
    friendForm: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      primaryImage: "",
      
    },
  };

  componentDidMount() {
    let friendId = this.props.match.params.id;
    console.log(friendId);
    if (friendId) {
      friendsServices
        .getFriendById(friendId)
        .then(this.onGetFriendByIdSuccess)
        .catch(this.onGetFriendByIdError);
    }
  }
  onGetFriendByIdSuccess = (response) => {
    console.log(response);
    let friendToUpdate = response.data.item;
    this.setState((prevState) => {
      let newFriendForm = { ...prevState.friendForm };

      newFriendForm.title = friendToUpdate.title;
      newFriendForm.bio = friendToUpdate.bio;
      newFriendForm.summary = friendToUpdate.summary;
      newFriendForm.headline = friendToUpdate.headline;
      newFriendForm.slug = friendToUpdate.slug;
      newFriendForm.statusId = friendToUpdate.statusId;
      newFriendForm.primaryImage = friendToUpdate.primaryImage.imageUrl;

      return { updateFriend: true, friendForm: newFriendForm };
    });
  };
  onGetFriendByIdError = (errResponse) => {
    console.log(errResponse);
  };

  onFriendFormUpdate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);

    let updatePayload = { ...this.state.friendForm };
    updatePayload.id = this.props.match.params.id;
    console.log(updatePayload);

    friendsServices
      .updateFriend(updatePayload, updatePayload.id)
      .then(this.updateFriendSuccess)
      .catch(this.updateFriendError);
  };
  updateFriendSuccess = (response) => {
    console.log(response);
    this.props.history.push("/friends");
  };
  updateFriendError = (errResponse) => {
    console.log(errResponse);
    toast.error(`Error: ${errResponse.response.data.errors}`);
  };

  onFriendFormChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      let newFriendForm = { ...prevState.friendForm };

      newFriendForm[inputName] = newValue;

      return { friendForm: newFriendForm };
    });
  };

  onFriendFormClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(this.state.friendForm);
    let friendPayload = this.state.friendForm;

    friendsServices
      .addFriend(friendPayload)
      .then(this.onAddFriendSuccess)
      .catch(this.onAddFriendError);
  };

  onAddFriendSuccess = (response) => {
    toast.success("Success: New friend added!");
    console.log(response);
  };

  onAddFriendError = (errResponse) => {
    console.log({ errResponse });
    toast.error(`Error: ${errResponse.response.data.errors}`);
  };

  onLoginFormClick(e) {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container m-5">
          <div className="row">
            <div className="col-md-5 border p-4 shadow">
              {this.state.updateFriend ? (
                <h2>Edit Friend</h2>
              ) : (
                <h2>Add Friends</h2>
              )}
              <NavLink to="/friends">View All Friends</NavLink>
              <hr className="my-4" />
              <form className="register-form">
                <div className="col-12">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="name"
                    onChange={this.onFriendFormChanged}
                    value={this.state.friendForm.title}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="bio" className="form-label">
                    Bio
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bio"
                    name="bio"
                    placeholder="This is a bio."
                    onChange={this.onFriendFormChanged}
                    value={this.state.friendForm.bio}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="summary" className="form-label">
                    Summary
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="summary"
                    name="summary"
                    placeholder="This is a summary"
                    onChange={this.onFriendFormChanged}
                    value={this.state.friendForm.summary}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="headline" className="form-label">
                    Headline
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="headline"
                    name="headline"
                    placeholder="This is a summary"
                    onChange={this.onFriendFormChanged}
                    value={this.state.friendForm.headline}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="slug" className="form-label">
                    Slug
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="slug"
                    name="slug"
                    onChange={this.onFriendFormChanged}
                    value={this.state.friendForm.slug}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="statusId" className="form-label">
                    StatusId
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="statusId"
                    name="statusId"
                    onChange={this.onFriendFormChanged}
                    value={this.state.friendForm.statusId}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="primaryImage" className="form-label">
                    Avatar Url
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="primaryImage"
                    name="primaryImage"
                    onChange={this.onFriendFormChanged}
                    value={this.state.friendForm.primaryImage}
                  />
                </div>

                <div className="mt-2 col-6">
                  {this.state.updateFriend ? (
                    <button
                      id="friendForm"
                      className="w-100 btn btn-secondary btn"
                      onClick={this.onFriendFormUpdate}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      id="friendForm"
                      className="w-100 btn btn-primary btn"
                      type="submit"
                      onClick={this.onFriendFormClick}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendsForm;