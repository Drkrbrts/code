import React from "react";
import { NavLink } from "react-router-dom";

//import * as userService from "../services/userService";

class SiteNav extends React.Component {
  onRegisterClicked = (e) => {
    e.preventDefault();

    console.log("onRegisterClicked was clicked", new Date());
    this.props.history.push("/register");
  };

  onLoginClicked = (e) => {
    e.preventDefault();

    this.props.history.push("/login");
  };

  onShoeFormClicked = (e) => {
    e.preventDefault();

    this.props.history.push("/shoeForm/");
  };

  render() {
    return (
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img
                src="https://pw.sabio.la/images/Sabio.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Sabio"
              />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink
                  to="/userHome"
                  className="nav-link px-2 text-secondary link-button"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/friends"
                  className="nav-link px-2 text-white link-button"
                >
                  Friends
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-friends"
                  className="nav-link px-2 text-white link-button"
                >
                  View Friends
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link px-2 text-white link-button"
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tech-companies"
                  className="nav-link px-2 text-white link-button"
                >
                  Tech Companies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jobs"
                  className="nav-link px-2 text-white link-button"
                >
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className="nav-link px-2 text-white link-button"
                >
                  Events
                </NavLink>
              </li>
            </ul>

            <div className="text-end">
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={this.onLoginClicked}
              >
                Login
              </button>

              <button
                type="button"
                className="btn btn-warning"
                onClick={this.onRegisterClicked}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default SiteNav;
