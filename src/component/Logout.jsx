import React from "react";
import { logOut } from "../services/userService";

class Logout extends React.Component {
  onLogOutClick = () => {
    console.log("logOut clicked");

    logOut().then(this.onLogOutSuccess).catch(this.onLogOutError);
  };

  onLogOutSuccess = (response) => {
    console.log(response);
    this.props.history.push("/login");
  };

  onLogOutError = (err) => {
    console.log(err);
  };

  render() {
    return (
      <div>
        <div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Logout;
