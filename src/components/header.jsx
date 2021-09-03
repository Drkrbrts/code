import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as userService from "../services/userService";

class NavHeader extends Component {
  state = {
    isLoggedIn: false,

    currentUser: {
      firstName: "",
      lastName: "",
      email: "",
      avatarUrl: "",
    },
  };

  componentDidMount() {
    console.log(this.props);

    userService
      .currentUser()
      .then(this.onCurrentSuccess)
      .catch(this.onCurrentError);
  }

  onCurrentSuccess = (response) => {
    console.log(response);
    let newValue = true;

    userService
      .currentUserById(response.data.item.id)
      .then(this.onCurrentIdSuccess)
      .catch(this.onCurrentIdError);

    this.setState({ isLoggedIn: true });

    this.setState(() => {
      let newState = {};

      newState.isLoggedIn = newValue;
      newState.firstName = response.data.item.name;

      return newState;
    });
  };

  onCurrentIdSuccess = (response) => {
    console.log(response.data.item);
  };

  onCurrentIdError = (response) => {
    console.log(response);
  };

  onCurrentError = (errResponse) => {
    console.log(errResponse);
  };

  onSignUpClicked = () => {
    console.log("signup firing");
  };

  onLogOutClicked = (e) => {
    console.log("logout firing");
    e.preventDefault();

    userService.logOut().then(this.onLogOutSuccess).catch(this.onLogOutError);
  };

  onLogOutSuccess = (response) => {
    console.log(response);
    this.props.history.push("/login");

    let newValue = false;

    this.setState(() => {
      let newState = {};

      newState.isLoggedIn = newValue;

      return newState;
    });
  };

  onLogOutError = (errResponse) => {
    console.log({ errResponse });
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
                <NavLink to="/jumbotron">
                  <button
                    href="#"
                    className="nav-link px-2 text-secondary link-button"
                  >
                    Home
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/content">
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Features
                  </button>
                </NavLink>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  About
                </button>
              </li>
            </ul>

            <div className="text-end">
              {this.state.isLoggedIn ? (
                <button
                  type="button"
                  className="btn btn-outline-danger me-2"
                  onClick={this.onLogOutClicked}
                >
                  Logout
                </button>
              ) : (
                <React.Fragment>
                  <NavLink to="/Login">
                    <button
                      type="button"
                      className="btn btn-outline-light me-2"
                    >
                      Login
                    </button>
                  </NavLink>
                  <NavLink to="/registerForm">
                    <button type="button" className="btn btn-warning">
                      Sign-up
                    </button>
                  </NavLink>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavHeader;
