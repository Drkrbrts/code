import React from "react";
import { NavLink } from "react-router-dom";
import { logOutUser, logInUser } from "../services/userService";
import { LoginButton, LogoutButton } from "../components-starter/buttons";
import debug from "sabio-debug";
const _logger = debug.extend("Navbar");

class SiteNav extends React.Component
{
  onLogoutUserSuccess(response)
  {
    _logger(response);
    _logger("user logged out");
  };

  onLogoutUserFail(response)
  {
    _logger(response);
    _logger("user logout failed");
  };

  onLoginUserSuccess(response)
  {
    _logger(response);
    _logger("you are now logged in :)");
  };

  onLoginUserFail(response)
  {
    _logger(response);
    _logger("login failed");
  };

  onLogoutClicked = (e) =>
  {
    e.preventDefault();
    _logger("logout clicked")
    logOutUser()
      .then(this.onLogoutUserSuccess)
      .catch(this.onLogoutUserFail);
  };

  onLoginClicked = () =>
  {
    _logger("login clicked")
    logInUser()
      .then(this.onLoginUserSuccess)
      .catch(this.onLoginUserFail);
  };

  displayLoginOrLogoutButton = () =>
  {
    let propsCopy = { ...this.props };
    let currentUsername = propsCopy.currentUser.firstName;
    if (currentUsername)
    {
      this.button = <NavLink to="/login">< LogoutButton /></NavLink>;
      return this.button;
    }

    else
    {
      this.button = <NavLink to="/login"><LoginButton /></NavLink>;
      return this.button;
    }
  }

  render()
  {
    let button = this.displayLoginOrLogoutButton();

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
                <NavLink to="/">
                  <button
                    className="nav-link px-2 text-secondary link-button"
                  >
                    Home
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
              <li>
                <NavLink to="/widget">
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Code Challenge - Widget
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/techco">
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Tech Co
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/jobs">
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Jobs
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/events">
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Events
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

              {button}

              <NavLink to="/register">
                <button type="button" className="btn btn-warning">
                  Sign-up
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export { SiteNav };