import React from "react";
import * as userService from "../services/userService";

class LoggedInHomePage extends React.Component {
  getCurrentUser = () => {
    userService
      .current()
      .then(this.onGetCurrentSuccess)
      .catch(this.onGetCurrentError);
  };

  onGetCurrentSuccess = (response) => {
    console.log("Success", response);
    return response.data.item.name;
    // return user name to html to display welcome message
  };

  onGetCurrentError = (error) => {
    console.log("Something went wrong");
    console.warn(error);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Welcome</h1>
      </React.Fragment>
    );
  }
}

export default LoggedInHomePage;
