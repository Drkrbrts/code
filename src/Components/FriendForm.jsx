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
      { name: "Title", placeholder: "Dwight Schrute" },
      { name: "Bio", placeholder: "This is a bio." },
      { name: "Summary", placeholder: "lorem ipsum dolor sit amet etc" },
      { name: "Headline", placeholder: "This is a headline." },
      { name: "Slug", placeholder: "www.schrutefarms.com" },
      { name: "StatusId", placeholder: "Active" },
      { name: "Skills", placeholder: "salesman of the year" },
      { name: "PrimaryImage", placeholder: "Image Url here" },
    ],
  };

  componentDidMount() {
    console.log(this.props.location.state);
    const friend = this.props.location.state;

    // this.setState((prevState) => {
    //   let friendInfo = { ...prevState.friendInfo };
    //   friendInfo.title = this.props.location.state.title;
    //   return { friendInfo };
    // });
  }

  onEditFriendSuccess = (response) => {
    console.log(response);
  };

  onFormChange = (e) => {
    const friendInfo = { ...this.state.friendInfo };
    friendInfo[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ friendInfo });
  };

  submitButtonHandler = () => {
    addFriend(this.state.friendInfo)
      .then(this.onAddFriendSuccess)
      .catch(this.onAddFriendError);
  };

  onAddFriendSuccess = (response) => {
    console.log("response", response);
    this.props.history.replace("/friends");
  };

  onAddFriendError = (response) => {
    console.log("response: ", response);
  };

  consoleState = () => {
    console.log(this.state.friendInfo);
  };

  mapField = (oneField) => {
    return (
      <FormField
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
          <button onClick={this.consoleState} className="btn btn-primary">
            showMeState
          </button>
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
