import React from "react";
import userService from "../services/userService";
import { NavLink } from "react-router-dom";

class Sitenav extends React.Component {
  onSignOutClicked = (e) => {
    e.preventDefault();
    console.log("onSignOutClicked");
    userService.logout().then(this.onSignOutSuccess).catch(this.onSignOutError);
  };
  onSignOutSuccess = (response) => {
    console.log("onSignOutSuccess", response);
    window.location.replace("/login");
  };
  onSignOutError = (response) => {
    console.log("onSignOutError", response);
  };
  render() {
    console.log(this.props.avatarUrl);
    return (
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div
            className="
          d-flex
          flex-wrap
          align-items-center
          justify-content-center justify-content-lg-start
        "
          >
            <ul
              className="
            nav
            col-12 col-lg-auto
            me-lg-auto
            mb-2
            justify-content-center
            mb-md-0
          "
            >
              <li>
                <NavLink to="/home" className="nav-link px-2 text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/friends" className="nav-link px-2 text-white">
                  People
                </NavLink>
              </li>
              <li>
                <NavLink to="/friends" className="nav-link px-2 text-white">
                  Blogs
                </NavLink>
              </li>
              <li>
                <button className="nav-link px-2 text-white">Tech Co.</button>
              </li>
              <li>
                <NavLink to="/jobs" className="nav-link px-2 text-white">
                  Jobs
                </NavLink>
              </li>
              <li>
                <button className="nav-link px-2 text-white">Events</button>
              </li>
            </ul>

            <div className="text-end">
              <a href="/login">
                <button type="button" className="btn btn-danger loginButton">
                  Login
                </button>
              </a>
              <a href="/register">
                <button className="btn btn-danger registerButton">
                  Register
                </button>
              </a>
            </div>
            <div className="dropdown text-end">
              <div
                className="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="nav-link px-2 text-white userIdDisplay">
                  hello
                </div>
                <img
                  src={this.props.avatarUrl}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle userImage"
                />
              </div>
              <ul
                className="dropdown-menu text-small"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <button
                    type="button"
                    className="dropdown-item signOutButton"
                    onClick={this.onSignOutClicked}
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Sitenav;
