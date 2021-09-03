import React from "react";
import * as userService from "../services/userService";
import { toast } from "react-toastify";
//import { Route } from "react-router-dom";

// import Register from "./tasks/Register";
// import LogIn from "./tasks/LogIn";

class UserHome extends React.Component {
  state = { currentUser: { name: "" } };

  componentDidMount() {
    userService
      .currentUser()
      .then(this.onGetUserSuccess)
      .catch(this.onGetUserError);
  }

  onGetUserSuccess = (response) => {
    console.log(response);
    let currentUser = { firstName: response.data.item.name };

    this.setState((prevState) => {
      return { ...prevState.name, currentUser };
    });
  };

  onGetUserError = (error) => {
    console.log(error);
  };

  onLogOutClicked = (e) => {
    this.props.history.push("/login");
    userService.logOut().then(this.onLogOutSuccess).catch(this.onLogOutError);
    console.log("user logged out");
  };

  onLogOutSuccess = (response) => {
    toast.success("You have successfully logged out!");
  };

  onLogOutError = (response) => {
    toast.error("You have not logged out, please try again.");
  };

  render() {
    return (
      <>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold text-center">
              Welcome {this.state.currentUser.firstName}!
            </h1>
          </div>
          <div className="text-end d-grid gap-2 d-md-block">
            <button
              type="warning "
              className="btn btn-warning"
              onClick={this.onLogOutClicked}
            >
              Log out
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default UserHome;
