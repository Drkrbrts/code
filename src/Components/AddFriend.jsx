import React from "react";
import * as friendService from "../services/friendService";

class AddFriend extends React.Component {
  state = {
    bio: "Hi, my name is Arthur Shelby",
    title: "Arthur Shelby",
    summary: "I am the oldest of three brothers",
    headline: "Don't **** with the Peaky Blinders",
    statusId: "Active",
    slug: "www.arthurshelby.com",
    primaryImage: "https://bit.ly/3qDuFoV",
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};
      newState[inputName] = newValue;

      return newState;
    });
  };

  onSubmitHandle = (e) => {
    e.preventDefault();
    friendService
      .addFriend(this.state)
      .then(this.onAddFriendSuccess)
      .catch(this.onAddFriendError);
  };

  onAddFriendSuccess = (response) => {
    console.log("friend added", response);
    this.props.history.push("/friends");
  };

  onAddFriendError = (error) => {
    console.log("unable to add friend", error);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="md-4 p-3">
            <form>
              <div className="md-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="title"
                  value={this.state.title}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Bio
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="bio"
                  value={this.state.bio}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Summary
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="summary"
                  value={this.state.summary}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Headline
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="headline"
                  value={this.state.headline}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Slug
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="slug"
                  value={this.state.slug}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Status
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="statusId"
                  value={this.state.statusId}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Primary Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onFormFieldChanged}
                  name="primaryImage"
                  value={this.state.primaryImage}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onSubmitHandle}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddFriend;
