import React from "react";
/* import ReactDOM from 'react-dom' */
import "rc-pagination/assets/index.css";
/* import Pagination from 'rc-pagination'
import { container } from 'webpack' */
import * as friendService from "./auth/friendService";
import { toast } from "react-toastify";

class AddFriends extends React.Component {
  state = {
    friend: {},
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
    console.log("This is the new state", this.state);
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log("Submit was clicked!");
    friendService
      .addFriend(this.state.friend)
      .then(this.onCreateSuccess)
      .catch(this.onCreateError);
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

export default AddFriends;
/* ReactDOM.render(<Pagination/>, container) */
