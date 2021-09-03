import React from "react";
import * as userService from "../services/userService";
// import { toast } from "react-toastify";

class Home extends React.Component {
  state = {
    userData: {
      id: 0,
      name: null,
    },
  };

  componentDidMount() {
    this.checkCurrentUser();
  }
  checkCurrentUser = () => {
    userService
      .getCurrentUser()
      .then(this.onGetUserSuccess)
      .catch(this.onGetUserError);
  };
  onGetUserSuccess = (response) => {
    console.log(response.data.item);
    this.setUser(response.data.item);
  };
  onGetUserError = (response) => {
    console.error("Unable to retrieve current user information", response);
  };

  setUser = (userInfo) => {
    let currentUser = { ...userInfo };
    this.setState((prevState) => {
      let userData = { ...prevState.userData };
      userData.id = currentUser.id;
      userData.name = currentUser.name;
      return { userData };
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>Welcome, {this.state.userData.name}.</h3>
        </div>
      </div>
    );
  }
}

export default Home;
