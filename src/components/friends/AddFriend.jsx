import React from "react";
/* import ReactDOM from 'react-dom' */
import "rc-pagination/assets/index.css";
/* import Pagination from 'rc-pagination'
import { container } from 'webpack' */
import * as friendService from "../auth/friendService";
import { toast } from "react-toastify";

class AddFriend extends React.Component {
  state = {
    friend: {
      primaryImage: {},
    },
  };

  checkUrl = () => {
    if (this.props.match.params) {
      console.log(
        "This is the parameter passed through the url",
        this.props.match.params
      );
      var userId = this.props.match.params.id;
      friendService
        .getById(userId)
        .then(this.getByIdSuccess)
        .catch(this.getByIdError);
    }
  };

  getByIdSuccess = (response) => {
    console.log(response);
    let userInfo = response.data.item;
    this.setState((prevState) => {
      return { friend: userInfo };
    }, this.stateChanged);
  };

  getByIdError = (err) => {
    console.log({ error: err });
  };

  onChange = (event) => {
    console.log("onChange", { syntheticEvent: event });
    var target = event.target;
    var name = target.name;
    var value = target.value;

    this.setState((prevState) => {
      var newState = { ...prevState };
      newState.friend[name] = value;
      return { friend: newState.friend };
    }, this.stateChanged);
  };

  stateChanged = () => {
    console.log("State changed, new state:", this.state);
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log("Submit was clicked!");
    if (!this.state.friend.id) {
      friendService
        .addFriend(this.state.friend)
        .then(this.onCreateSuccess)
        .catch(this.onCreateError);
    } else {
      friendService
        .updateFriend(this.state.friend)
        .then(this.updateSuccess)
        .catch(this.updateError);
    }
  };

  updateSuccess = (response) => {
    console.log(response);
    this.props.history.push("/friends");
  };

  updateError = (err) => {
    console.log({ error: err });
  };

  onCreateSuccess = (response) => {
    console.log(response);
    toast.success("Add Friend Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.history.push("/friends");
  };
  onCreateError = (err) => {
    console.log({ error: err });
    toast.error("Login Error!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  componentDidMount() {
    if (this.props.isLoggedIn === false) {
      console.log(this.props.isLoggedIn);
      this.props.history.push("/login");
    } else {
      this.checkUrl();
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Add Friend</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                aria-describedby="title"
                onChange={this.onChange}
                value={this.state.friend.title ? this.state.friend.title : ""}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">
                Bio
              </label>
              <input
                type="text"
                className="form-control"
                id="bio"
                name="bio"
                onChange={this.onChange}
                value={this.state.friend.bio ? this.state.friend.bio : ""}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="summary">
                Summary
              </label>
              <input
                type="text"
                className="form-control"
                id="summary"
                name="summary"
                onChange={this.onChange}
                value={
                  this.state.friend.summary ? this.state.friend.summary : ""
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="headline">
                Headline
              </label>
              <input
                type="text"
                className="form-control"
                id="headline"
                name="headline"
                onChange={this.onChange}
                value={
                  this.state.friend.headline ? this.state.friend.headline : ""
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="slug">
                Slug
              </label>
              <input
                type="text"
                className="form-control"
                id="slug"
                name="slug"
                onChange={this.onChange}
                value={this.state.friend.slug ? this.state.friend.slug : ""}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="statusId">
                Status Id
              </label>
              <input
                type="text"
                className="form-control"
                id="statusId"
                name="statusId"
                onChange={this.onChange}
                value={
                  this.state.friend.statusId ? this.state.friend.statusId : ""
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="primaryImage">
                primaryImage
              </label>
              <input
                type="text"
                className="form-control"
                id="primaryImage"
                name="primaryImage"
                onChange={this.onChange}
                value={this.state.friend.primaryImage.imageUrl}
              />
            </div>
            <button className="btn btn-primary" onClick={this.handleClick}>
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddFriend;
/* ReactDOM.render(<Pagination/>, container) */
