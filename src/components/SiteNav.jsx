import React, { Component } from "react";
//import * as starterService from "../services/starterService";

class SiteNav extends Component {
  onSignupClick = () => {
    this.props.history.push("/signup");
  };

  onLoginClick = () => {
    this.props.history.push("/login");
  };

  onLoginSuccess = (response) => {
    console.log(response, "login success");
  };

  onLoginError = (error) => {
    console.warn(error);
  };

  onHomeClick = () => {
    this.props.history.push("/home");
  };

  onBlogClick = () => {
    this.props.history.push("/blog");
  };

  onFriendsClick = () => {
    this.props.history.push("/friends");
  };

  onTechCoClick = () => {
    this.props.history.push("/techcompanies");
  };

  onJobsClick = () => {
    this.props.history.push("/jobs");
  };

  onEventsClick = () => {
    this.props.history.push("/events");
  };

  onCodeChallengeClick = () => {
    this.props.history.push("/codechallenge");
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
                <button
                  href="#"
                  className="nav-link px-2 text-secondary link-button"
                  onClick={this.onHomeClick}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="nav-link px-2 text-white link-button"
                  onClick={this.onFriendsClick}
                >
                  People
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.onBlogClick}
                >
                  Blogs
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.onTechCoClick}
                >
                  Tech Co
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.onJobsClick}
                >
                  Jobs
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.onEventsClick}
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.onCodeChallengeClick}
                >
                  Code Challenge
                </button>
              </li>
            </ul>

            <div className="text-end">
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={this.onLoginClick}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.onSignupClick}
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default SiteNav;
