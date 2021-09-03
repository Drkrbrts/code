import { data } from "jquery";
import React from "react";
import * as userService from "../services/friendsServices";

class FriendsForm extends React.Component {
  state = {
    addFriend: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      primaryImage: "",
    },
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      let addFriend = { ...prevState.addFriend };

      addFriend[inputName] = newValue;

      return { addFriend };
    });
  };

  onAddFriendClicked = (e) => {
    e.preventDefault();

    const data = this.state.addFriend;

    if (!this.props.match.params.id) {
      userService
        .postFriend(data)
        .then(this.onPostFriendSuccess)
        .catch(this.onPostFriendError);
    } else {
      console.log(this.props.match.params.id);

      userService
        .editFriend(data, this.props.match.params.id)
        .then(this.onEditFriendSuccess)
        .catch(this.onEditFriendError);
    }
  };

  onPostFriendSuccess = (response) => {
    console.log("Success", response);
    this.resetForm();
  };

  onPostFriendError = (response) => {
    console.warn("Error", response);
  };

  onEditFriendSuccess = (response) => {
    console.log(response, "edit");
  };

  onEditFriendError = (response) => {
    console.log(response);
  };

  resetForm = () => {
    this.setState({
      addFriend: {
        title: "",
        bio: "",
        summary: "",
        headline: "",
        slug: "",
        statusId: "",
        primaryImage: "",
      },
    });
  };

  render() {
    return (
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Add a Friend
                  </h2>

                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control form-control-lg"
                        placeholder="Title"
                        value={this.state.addFriend.title}
                        onChange={this.onFormFieldChanged}
                      />
                      <label className="form-label" htmlFor="title">
                        Title
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="bio"
                        id="bio"
                        placeholder="Bio"
                        className="form-control form-control-lg"
                        value={this.state.addFriend.bio}
                        onChange={this.onFormFieldChanged}
                      />
                      <label className="form-label" htmlFor="bio">
                        Bio
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="summary"
                        id="summary"
                        className="form-control form-control-lg"
                        placeholder="Summary"
                        value={this.state.addFriend.summary}
                        onChange={this.onFormFieldChanged}
                      />
                      <label className="form-label" htmlFor="summary">
                        Summary
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="headline"
                        id="headline"
                        className="form-control form-control-lg"
                        placeholder="Headline"
                        value={this.state.addFriend.headline}
                        onChange={this.onFormFieldChanged}
                      />
                      <label className="form-label" htmlFor="headline">
                        Headline
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="url"
                        name="slug"
                        id="slug"
                        className="form-control form-control-lg"
                        placeholder="Slug URL"
                        value={this.state.addFriend.slug}
                        onChange={this.onFormFieldChanged}
                      />
                      <label className="form-label" htmlFor="slug">
                        Slug
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="statusId"
                        id="statusId"
                        className="form-control form-control-lg"
                        placeholder="Status"
                        value={this.state.addFriend.statusId}
                        onChange={this.onFormFieldChanged}
                      />
                      <label className="form-label" htmlFor="statusId">
                        Status
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="url"
                        name="primaryImage"
                        id="primaryImage"
                        className="form-control form-control-lg"
                        placeholder="Image URL"
                        value={this.state.addFriend.primaryImage}
                        onChange={this.onFormFieldChanged}
                      />
                      <label className="form-label" htmlFor="primaryImage">
                        Primary Image
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={this.onAddFriendClicked}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendsForm;
