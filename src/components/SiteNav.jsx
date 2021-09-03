import React from "react";
import * as userService from "../services/userService";

class SiteNav extends React.Component {
  onClickRegisterButton = (e) => {
    e.preventDefault();
    this.props.history.push("/register");
  };

  onClickLoginButton = (e) => {
    e.preventDefault();
    this.props.history.push("/login");
  };

  onClickLogoutButton = (e) => {
    e.preventDefault();

    userService.logout().then(this.onLogoutSuccess).catch(this.onLogoutError);
  };

  onLogoutSuccess = () => {
    this.props.history.push("/login");
  };

  onLogoutError = (errResponse) => {
    console.log(errResponse);
  };

  onClickHome = () => {
    this.props.history.push("/home");
  };

  onClickFriends = () => {
    this.props.history.push("/friends");
  };

  onClickBlogs = () => {
    this.props.history.push("/blogs");
  };

  onClickTechCompanies = () => {
    this.props.history.push("/techCompanies");
  };

  onClickJobs = () => {
    this.props.history.push("/jobs");
  };

  onClickEvents = () => {
    this.props.history.push("/events");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container sitenav">
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
                <button
                  href="#"
                  className="nav-link px-2 text-secondary link-button"
                  onClick={this.onClickHome}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="nav-link px-2 text-white link-button"
                  onClick={this.onClickFriends}
                >
                  Friends
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.onClickBlogs}
                >
                  Blogs
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.onClickTechCompanies}
                >
                  Tech Cos
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.onClickJobs}
                >
                  Jobs
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.onClickEvents}
                >
                  Events
                </button>
              </li>
            </ul>
            <div className="text-end">
              <button
                type="button"
                className="btn btn-light me-2 d-none"
                onClick={this.onClickLoginButton}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-danger me-2"
                onClick={this.onClickLogoutButton}
              >
                Logout
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.onClickRegisterButton}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SiteNav;
