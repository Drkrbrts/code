import React from "react";
import * as userService from "../services/userServices";
import { NavLink } from "react-router-dom";
import UserNav from "./UserNav";

class HomePage extends React.Component {
  state = {
    firstName: "First",
    lastName: "Last",
  };
  componentDidMount() {
    console.log("componentDidMount home page");
    userService.currentInfo().then(this.onInfoSuccess).catch(this.onInfoError);
  }

  onInfoSuccess = (response) => {
    console.log(response.data.item.id);
    userService
      .getUser(response.data.item.id)
      .then(this.onUserSuccess)
      .catch(this.onUserError);
  };

  onInfoError = (response) => {
    console.warn({ error: response });
  };

  onUserSuccess = (response) => {
    this.setState(() => {
      let copy = { ...this.state };
      var data = {
        firstName: response.data.item.firstName,
        lastName: response.data.item.lastName,
      };
      copy.firstName = data.firstName;
      copy.lastName = data.lastName;
      var userName = copy.firstName + " " + copy.lastName;
      console.log("getting user id success", data, userName);
      return { userName };
    });
  };

  onUserError = (response) => {
    console.warn({ error: response });
  };

  logoutUser = () => {
    // e.preventDefault()
    console.log("click");
    userService
      .userLogout()
      .then(this.onLogoutSuccess)
      .catch(this.onLogoutError);
  };

  onLogoutSuccess = () => {
    console.log("logout successful");
  };
  onLogoutError = (response) => {
    console.warn({ error: response });
  };

  render() {
    return (
      <React.Fragment>
        <UserNav></UserNav>
        <div className="container">
          <div className="col-12 my-5 text-center">
            <div className="row">
              <div className="fw-bold" name="welcome">
                <h1>Welcome {this.state.userName}</h1>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HomePage;
