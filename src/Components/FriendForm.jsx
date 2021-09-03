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
      { name: "Bio", placeholder: "Dwight Schrute" },
      { name: "Summary", placeholder: "Dwight Schrute" },
      { name: "Headline", placeholder: "Dwight Schrute" },
      { name: "Slug", placeholder: "Dwight Schrute" },
      { name: "Status", placeholder: "Dwight Schrute" },
      { name: "Skills", placeholder: "Dwight Schrute" },
      { name: "Primary Image", placeholder: "Dwight Schrute" },
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
      <FormField fieldName={oneField.name} onFormChange={this.onFormChange} />
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
            <div className="form-group row pt-3">
              <label className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10">
                <input
                  onChange={this.onFormChange}
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Dwight Schrute"
                />
              </div>
            </div>
            <div className="form-group row pt-3">
              <label className="col-sm-2 col-form-label">Bio</label>
              <div className="col-sm-10">
                <input
                  onChange={this.onFormChange}
                  type="text"
                  className="form-control"
                  name="bio"
                  placeholder="This is a bio."
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Summary</label>
              <div className="col-sm-10">
                <input
                  onChange={this.onFormChange}
                  type="text"
                  className="form-control"
                  name="summary"
                  placeholder="lorem ipsum dolor sit amet etc"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Headline</label>
              <div className="col-sm-10">
                <input
                  onChange={this.onFormChange}
                  type="text"
                  className="form-control"
                  name="headline"
                  placeholder="This is a headline."
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Slug</label>
              <div className="col-sm-10">
                <input
                  onChange={this.onFormChange}
                  type="text"
                  className="form-control"
                  name="slug"
                  placeholder="www.schrutefarms.com"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Status</label>
              <div className="col-sm-10">
                <input
                  onChange={this.onFormChange}
                  type="text"
                  className="form-control"
                  name="statusId"
                  placeholder="Active"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Skills</label>
              <div className="col-sm-10">
                <input
                  onChange={this.onFormChange}
                  type="text"
                  className="form-control"
                  name="skills"
                  placeholder="salesman of the year"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Primary Image</label>
              <div className="col-sm-10">
                <input
                  onChange={this.onFormChange}
                  type="text"
                  className="form-control"
                  name="primaryImage"
                  placeholder="image url here"
                />
              </div>
            </div>

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
            {this.state.fieldNames.map(this.mapField)}
          </form>
        </div>
      </div>
    );
  }
}

export default FriendForm;
