import React from "react";
// import {NavLink} from "react-router-dom";
import * as userService from "../services/userService";

class Home extends React.Component {
  state = {
    name: "",
  };

  componentDidMount() {
    userService
      .getCurrentUser()
      .then(this.onGetCurrentUserSuccess)
      .catch(this.onGetCurrentUserError);
  }

  onGetCurrentUserSuccess = (response) => {
    console.log(response, "success");
    let currentUser = response.data.item.name;
    this.setState({ name: currentUser }, () => console.log(this.state.name));
  };

  onGetCurrentUserError = (error) => {
    console.log(error, "error");
  };

  onLogOutClicked = () => {
    userService.logOut().then(this.onLogOutSuccess).catch(this.onLogOutError);
  };

  onLogOutSuccess = (response) => {
    console.log(response, "You have logged out.");
    this.props.history.push("/");
  };

  onLogOutError = (error) => {
    console.log(error, "You have failed to log out.");
  };

  render() {
    return (
      <>
        <div className="container">
          <strong>Welcome {this.state.name}. This is the Home page.</strong>
          <button className="btn btn-danger" onClick={this.onLogOutClicked}>
            Logout
          </button>
        </div>
      </>
    );
  }
}

export default Home;
