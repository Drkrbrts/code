import React from "react";
import * as userServices from "../services/userServices";

class LoggedIn extends React.Component {
  state = { currentUser: { firstName: " " } };

  onLoggedOutClicked = (e) => {
    e.preventDefault();

    userServices.logOut().then(this.onActionSuccess).catch(this.onActionError);
  };
  onActionSuccess = (response) => {
    this.props.history.push("/loggedout");
  };

  onActionError = (errResponse) => {};

  componentDidMount() {
    userServices.currentUser().then(this.onGetSuccess).catch(this.onGetError);
  }
  onGetSuccess = (response) => {
    console.log(response.data.item.id);
    userServices
      .userId(response.data.item.id)
      .then(this.onGetIdSuccess)
      .catch(this.onGetIdError);
  };
  onGetError = (err) => {
    console.log(err, "fire");
  };
  onGetIdSuccess = (response) => {
    console.log(response.data.item.firstName);
    var currentUser = { firstName: response.data.item.firstName };
    this.setState((prevState) => {
      return { ...prevState.firstName, currentUser };
    });
  };

  onGetIdError = (err) => {
    console.log(err);
  };
  render() {
    return (
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
            onClick={this.onLoggedOutClicked}
          >
            Log out
          </button>
        </div>
      </div>
    );
  }
}
export default LoggedIn;
