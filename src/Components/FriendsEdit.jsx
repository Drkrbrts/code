import React from "react";
import "rc-pagination/assets/index.css";
import { editFriend, friendCreate } from "../services/friendService";

class FriendsEdit extends React.Component {
  state = {
    formData: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      skills: "",
      primaryImage: "",
    },
  };

  // componentDidMount() {
  //   friendGetAll().then(this.getFriendSuccess).catch(this.getFriendError);
  // }

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onSubmitFriendClicked = (e) => {
    console.log("friend clicked");

    if (!this.props.history.location.state) {
      friendCreate(this.state.formData)
        .then(this.friendCreateSuccess)
        .catch(this.friendCreateError);
    } else {
      editFriend(this.state.formData, this.props.history.location.state)
        .then(this.friendEditSuccess)
        .catch(this.friendEditError);
    }
  };

  friendCreateSuccess = (response) => {
    console.log({ "friendCreateSuccess!!!": response });
    this.props.history.push("/FriendsHome");
  };

  friendCreateError = (response) => {
    console.log({ "friendCreateError...": response });
  };
  friendEditSuccess = (response) => {
    console.log({ "friendCreate Success!!!": response });
    this.props.history.push("/FriendsHome");
  };
  friendEditError = (response) => {
    console.log({ "friendCreate Error..": response });
  };
  getFriendSuccess = (response) => {
    console.log({ getFriendSuccess: response.data.item.pagedItems });
    // let getId = response.data.item.pagedItems;

    // this.setState((prevState) => {
    //   return {
    //     mappedGetFriendsId: getId.map(this.mapFriendId),
    //   };
    // });
  };
  getFriendError = (response) => {
    console.log({ getFriendError: response });
  };
  // mapFriendId = (friendId) => {
  //   console.log(friendId.id);
  //   return friendId.id;
  // };
  render() {
    return (
      <React.Fragment>
        <div className="container p-10">
          <h1>
            <strong>Add or Edit Friend</strong>
          </h1>
          <div className="form-container p-10">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputTitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  onChange={this.onFormFieldChanged}
                  placeholder="Title"
                  value={this.state.formData.title}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputBio" className="form-label">
                  Bio
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="bio"
                  onChange={this.onFormFieldChanged}
                  placeholder="bio"
                  value={this.state.formData.bio}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputSummary" className="form-label">
                  Summary
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="summary"
                  onChange={this.onFormFieldChanged}
                  placeholder="summary"
                  value={this.state.formData.summary}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputHeadline" className="form-label">
                  Headline
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="headline"
                  onChange={this.onFormFieldChanged}
                  placeholder="headline"
                  value={this.state.formData.headline}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputSlug" className="form-label">
                  Slug
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="slug"
                  onChange={this.onFormFieldChanged}
                  placeholder="slug"
                  value={this.state.formData.slug}
                ></input>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlSelect"
                  className="form-label"
                >
                  Status
                </label>
                <select
                  className="form-control"
                  value={this.state.formData.statusId}
                  onChange={this.onFormFieldChanged}
                  name="statusId"
                >
                  <option value="">Select status</option>
                  <option value="notSet">Not Set</option>
                  <option value="active">Active</option>
                  <option value="deleted ">Deleted</option>
                  <option value="flagged">Flagged</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputSkills" className="form-label">
                  Skills
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="skills"
                  onChange={this.onFormFieldChanged}
                  placeholder="skills"
                  value={this.state.formData.skills}
                ></input>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPreliminary Image"
                  className="form-label"
                >
                  Primary Image
                </label>
                <input
                  type="url"
                  className="form-control"
                  name="primaryImage"
                  onChange={this.onFormFieldChanged}
                  placeholder="primary image"
                  value={this.state.formData.primaryImage}
                ></input>
              </div>

              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onSubmitFriendClicked}
              >
                Submit
              </button>
            </form>
            {/* <div className="getId">{this.state.mappedGetFriendsId}</div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendsEdit;
