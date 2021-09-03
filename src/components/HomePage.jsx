import React from "react";
import * as userService from "../services/userService";

class HomePage extends React.Component {
  state = {
    currentUser: {
      firstName: "",
    },
  };
  componentDidMount = () => {
    userService
      .currentUser()
      .then(this.onCurrentUserSuccess)
      .catch(this.onCurrentUserError);
  };

  onCurrentUserSuccess = (response) => {
    console.log("currentUsergood", response);

    userService
      .getUserById(response.data.item.id)
      .then(this.onGetUserByIdSuccess)
      .catch(this.onGetUserByIdError);
  };

  onCurrentUserError = (err) => {
    console.error("currentUserbad", err);
  };

  onGetUserByIdSuccess = (response) => {
    console.log("UserIdSuccess", response);
    this.setState((prevState) => {
      let currentUser = { ...prevState.currentUser };
      currentUser.firstName = response.data.item.firstName;
      return { currentUser };
    });
  };
  onGetUserByIdError = (err) => {
    console.error("homepageIDbad", err);
  };

  render() {
    return (
      <div>
        <h1 className="text-center p-5">
          Welcome {this.state.currentUser.firstName}
        </h1>
        ;
      </div>
    );
  }
}

export default HomePage;
