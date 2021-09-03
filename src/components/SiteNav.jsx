import React, { Component } from "react";
import * as starterService from "../services/starterService";

class SiteNav extends Component {
  componentDidMount() {
    console.log("component did mount");
    const loginInfo = {
      email: "brandonayrigan@gmail.com",
      password: "Password1!",
      tenantId: "U02811Y0V2Q",
    };

    starterService
      .logIn(loginInfo)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  }

  onLoginClick = () => {
    this.props.history.push("/login");
    const loginInfo = {
      email: "brandonayrigan@gmail.com",
      password: "Password1!",
      tenantId: "U02811Y0V2Q",
    };

    starterService
      .logIn(loginInfo)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
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

  onJumboClick = () => {
    this.props.history.push("/jumbo");
  };

  onContentClick = () => {
    this.props.history.push("/content");
  };

  onFooterClick = () => {
    this.props.history.push("/footer");
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
                  onClick={this.onJumboClick}
                >
                  Jumbo
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.onContentClick}
                >
                  Content
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.onFooterClick}
                >
                  Footer
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
                onClick={this.onSigninClick}
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
