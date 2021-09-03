import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import userService from "../services/userServices";

// import userService from "../services/userServices"

class SiteNav extends Component {
  state = {
    currentlyLoggedIn: false,
    userName: "",
  };

  componentDidMount() {
    // console.log(this.props);

    userService
      .currentUser()
      .then(this.onCurrentUserSuccess)
      .catch(this.onCurrentUserError);
  }
  onCurrentUserSuccess = (response) => {
    console.log(response);
    let newValue = true;

    this.setState(() => {
      let newState = {};

      newState.currentlyLoggedIn = newValue;
      newState.userName = response.data.item.name;

      return newState;
    });
  };
  onCurrentUserError = (errResponse) => {
    console.log({ errResponse });
  };

  logoutOnClick = (e) => {
    e.preventDefault();
    userService.logout().then(this.onLogoutSuccess).catch(this.onLogoutError);
  };

  onLogoutSuccess = (response) => {
    console.log(response);
    this.props.history.push("/login");

    let newValue = false;

    this.setState(() => {
      let newState = {};

      newState.currentlyLoggedIn = newValue;

      return newState;
    });
  };
  onLogoutError = (errResponse) => {
    console.log({ errResponse });
  };

  render() {
    return (
      <React.Fragment>
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
                  <NavLink className="px-1 nav-link" to="/home">
                    <button className="text-secondary link-button">Home</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="px-1 nav-link" to="/friends">
                    <button className="text-white link-button">Friends</button>
                  </NavLink>
                </li>
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Blogs
                  </button>
                </li>
                <li>
                  <NavLink className="nav-link px-1" to="/techCos">
                    <button href="#" className="text-white link-button">
                      Tech Cos
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="px-1 nav-link" to="/jobs">
                    <button className="text-white link-button">Jobs</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="px-1 nav-link" to="/jumbo">
                    <button className="text-white link-button">Events</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="px-1 nav-link" to="/codechallenge">
                    <button className="text-white link-button">
                      CodeChallenge
                    </button>
                  </NavLink>
                </li>
              </ul>

              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>

              <div className="text-end">
                {this.state.currentlyLoggedIn ? (
                  <button
                    type="button"
                    className="btn btn-outline-danger me-2"
                    onClick={this.logoutOnClick}
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink to="/login">
                    <button
                      type="button"
                      className="btn btn-outline-light me-2"
                    >
                      Login
                    </button>
                  </NavLink>
                )}
                {/* <NavLink to="/Login">
                  <button type="button" className="btn btn-outline-light me-2">
                    Login
                  </button>
                </NavLink> */}
                <NavLink to="/register">
                  <button type="button" className="btn btn-warning">
                    Sign-up
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default SiteNav;
