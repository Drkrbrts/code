import React from "react";
import { NavLink } from "react-router-dom";
import * as userService from "../services/userService";

class SiteNav extends React.Component {
  state = {
    currentlyLoggedIn: false,
    userName: "",
  };

  componentDidMount() {
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
    console.log(response.data);
    this.props.history.push("/login");

    let newValue = false;

    this.setState(() => {
      let newState = {};

      newState.currentlyLoggedIn = newValue;

      return newState;
    });
  };
  onLogoutError = (errResponse) => {
    console.log(errResponse);
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
                <NavLink to="/home">
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Home
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/content">
                  <button className="nav-link px-2 text-white link-button">
                    Content
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/friends">
                  <button className="nav-link px-2 text-white link-button">
                    Friends
                  </button>
                </NavLink>
              </li>
              {/* <li> */}
              {/* <NavLink to="/addfriends">
                  <button className="nav-link px-2 text-white link-button">
                    Add Friends
                  </button>
                </NavLink>
              </li> */}
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  About
                </button>
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
                  <button type="button" className="btn btn-outline-light me-2">
                    Login
                  </button>
                </NavLink>
              )}
            </div>
            <NavLink to="/register">
              <button type="button" className="btn btn-warning">
                Register
              </button>
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}

export default SiteNav;
