import React, { Component } from "react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import * as userService from "../services/userService";
import "./../StarterProjectAll.css";

class NavBar extends Component {
  onLogOutclicked = () => {
    userService
      .logOutUser()
      .then(this.onLogoutSuccess)
      .catch(this.onLogoutError);
  };

  onLogoutSuccess = (response) => {
    console.log("onLogoutSuccess", { response });
    // var logOutState = { type: "LOGOUT", payload: null };
    toast.success("Succesfully Logged Out!");
    this.props.handleLogOut();
    this.props.history.push("/");
  };
  onLogoutError = (response) => {
    console.log({ Error: response });
  };

  render() {
    return (
      <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-dark px-0">
        <div className="container flex-wrap flex-md-nowrap py-0 px-3">
          <div className="navbar-nav-scroll order-3 order-md-0 d-flex justify-content-center justify-content-md-start">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/FriendsPage">
                  Friends
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Tech Co.
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/JobsPage">
                  Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Events
                </NavLink>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav ml-sm-auto">
            <button
              type="button"
              className="btn btn-outline-light btn-small title-btn"
              onClick={this.onLogOutclicked}
            >
              Log Out
            </button>
          </ul>
        </div>
      </header>
    );
  }
}

export default NavBar;
