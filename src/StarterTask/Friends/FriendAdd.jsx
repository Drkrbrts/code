import React from "react";
import defaultExport from "./friendService";
import { toast } from "react-toastify";

class FriendsAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        title: " ",
        bio: " ",
        summary: " ",
        headline: " ",
        slug: " ",
        statusId: " ",
        primaryImage: " ",
      },
    };
  }
  changeFormData = (e) => {
    let target = e.target;
    let name = target.name;
    if (target.type === "checkbox") {
      if (target.checked === true) {
        target.value = "Active";
      } else if (target.checked === false) {
        target.value = "NotSet";
      }
    }
    let val = target.value;
    this.setState((prevState) => {
      const formData = { ...prevState.formData, [name]: val };
      return { formData: formData };
    });
  };
  onSubmitClick = () => {
    defaultExport
      .addFriends(this.state.formData)
      .then(this.onSubmitSuccess)
      .catch(this.onFailure);
  };
  onSubmitSuccess = (data) => {
    console.log(data);
    toast.success("Friend Added!");
    this.props.history.push(`/friends`);
  };
  onReturnClick = () => {
    this.props.history.push("/friends");
  };
  onFailure = (data) => {
    console.warn(data);
    toast.error("There was an error");
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <strong>ADD A NEW FRIEND</strong>
          </h2>
          <form className="overlay">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                className="form-control"
                name="title"
                placeholder="Full Name"
                onChange={this.changeFormData}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Bio</label>
              <input
                className="form-control"
                name="bio"
                placeholder="Short Biography"
                onChange={this.changeFormData}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Summary</label>
              <input
                className="form-control"
                name="summary"
                placeholder="Short Summary"
                onChange={this.changeFormData}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Headline</label>
              <input
                className="form-control"
                name="headline"
                placeholder="Two words that describes you best"
                onChange={this.changeFormData}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Slug</label>
              <input
                className="form-control"
                name="slug"
                placeholder="Unique Identifier"
                onChange={this.changeFormData}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Primary Image</label>
              <input
                type="text"
                className="form-control"
                name="primaryImage"
                placeholder="Image URL"
                onChange={this.changeFormData}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                name="statusId"
                onChange={this.changeFormData}
              />
              <label
                className="form-check-label"
                htmlFor="statusId"
                style={{ marginLeft: "7px" }}
              >
                Active Status
              </label>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onSubmitClick}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ float: "right" }}
                onClick={this.onReturnClick}
              >
                Go Back
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendsAdd;
