import React from "react";
import defaultExport from "./friendService";
import { toast } from "react-toastify";

class FriendEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currFriend: this.props.location.state };
  }
  changeFormData = (e) => {
    let target = e.target;
    let name = target.name;
    let val = target.value;
    this.setState((prevState) => {
      const currFriend = { ...prevState.currFriend, [name]: val };
      return { currFriend: currFriend };
    });
  };
  onUpdateClick = () => {
    let baseData = this.state.currFriend.currFriend;
    defaultExport
      .changeFriends(baseData, baseData.id)
      .then(this.onUpdateSuccess)
      .catch(this.onFailure);
  };
  onUpdateSuccess = (data) => {
    console.log(data);
    toast.success("Friend Updated Successfully!");
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
        <img src={this.state.image} alt="..." className="img-fluid" />
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <strong>UPDATE FRIEND DATA</strong>
          </h2>
          <form className="overlay">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                className="form-control"
                name="title"
                placeholder="Full Name"
                onChange={this.changeFormData}
                defaultValue={this.state.currFriend.currFriend.title}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Bio</label>
              <input
                className="form-control"
                name="bio"
                placeholder="Short Biography"
                onChange={this.changeFormData}
                defaultValue={this.state.currFriend.currFriend.bio}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Summary</label>
              <input
                className="form-control"
                name="summary"
                placeholder="Short Summary"
                onChange={this.changeFormData}
                defaultValue={this.state.currFriend.currFriend.summary}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Headline</label>
              <input
                className="form-control"
                name="headline"
                placeholder="Two words that describes you best"
                onChange={this.changeFormData}
                defaultValue={this.state.currFriend.currFriend.headline}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Slug</label>
              <input
                className="form-control"
                name="slug"
                placeholder="Unique Identifier"
                onChange={this.changeFormData}
                defaultValue={this.state.currFriend.currFriend.slug}
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
                defaultValue={this.state.currFriend.currFriend.primaryImage}
              />
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onUpdateClick}
              >
                Update Friend
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

export default FriendEdit;
