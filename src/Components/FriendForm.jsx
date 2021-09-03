import React, { Component } from "react";
import FormField from "./FormField";
import { addFriend, editFriend } from "../services/friendServices";

class FriendForm extends Component {
  state = {
    friendInfo: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "",
      skills: "",
      primaryImage: "",
    },
    fieldNames: [
      { name: "title", placeholder: "Dwight Schrute" },
      { name: "bio", placeholder: "This is a bio." },
      { name: "summary", placeholder: "lorem ipsum dolor sit amet etc" },
      { name: "headline", placeholder: "This is a headline." },
      { name: "slug", placeholder: "www.schrutefarms.com" },
      { name: "statusId", placeholder: "Active" },
      { name: "skills", placeholder: "salesman of the year" },
      { name: "primaryImage", placeholder: "Image Url here" },
    ],
    edit: false,
  };

  componentDidMount() {
    if (this.props.location.state) {
      const friend = this.props.location.state[0];

      console.log("friendid: ", friend.id);

      const updater = (prevState, props) => {
        const newFriend = { ...prevState.friendInfo };
        newFriend.title = friend.title;
        newFriend.bio = friend.bio;
        newFriend.summary = friend.summary;
        newFriend.headline = friend.headline;
        newFriend.slug = friend.slug;
        newFriend.statusId = friend.statusId;
        newFriend.primaryImage = friend.primaryImage.imageUrl;
        newFriend.id = friend.id;

        return { friendInfo: newFriend };
      };

      this.setState(updater);
    }
  }

  onFormChange = (e) => {
    const friendInfo = { ...this.state.friendInfo };
    friendInfo[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ friendInfo });
  };

  submitButtonHandler = () => {
    if (!this.props.location.state) {
      addFriend(this.state.friendInfo)
        .then(this.onAddFriendSuccess)
        .catch(this.onAddFriendError);
    } else {
      editFriend(this.state.friendInfo, this.props.match.params.friendId)
        .then(this.onEditFriendSuccess)
        .catch(this.onEditFriendErro);
    }
  };

  onEditFriendSuccess = (response) => {
    console.log("response", response);
    this.props.history.replace("/friends");
  };

  onEditFriendError = (response) => {
    console.log("response: ", response);
  };

  onAddFriendSuccess = (response) => {
    console.log("response", response);
    this.props.history.replace("/friends");
  };

  onAddFriendError = (response) => {
    console.log("response: ", response);
  };

  mapField = (oneField) => {
    return (
      <FormField
        formValues={this.state.friendInfo[oneField.name]}
        key={oneField.name}
        fieldName={oneField.name}
        sampleValue={oneField.placeholder}
        onFormChange={this.onFormChange}
      />
    );
  };

  render() {
    return (
      <div className="container mt-5 p-5 ml-5 justify-content-center">
        <div className="row">
          <form
            className="col-md-10 shadow justify-content-center pb-3"
            style={{ borderStyle: "ridge" }}
          >
            <div className="row" style={{ backgroundColor: "#4b0082" }}>
              <h2 style={{ color: "white" }} className="pt-2">
                Add or Edit Friend
              </h2>
            </div>
            {this.state.fieldNames.map(this.mapField)}

            <div className="form-group row">
              <div className="col-sm-10">
                <button
                  onClick={this.submitButtonHandler}
                  type="button"
                  className="btn btn-outline-light submit-button"
                  style={{ backgroundColor: "#4b0082" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FriendForm;
