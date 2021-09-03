import React from "react";
import * as userService from "../services/userService";
import { NavLink } from "react-router-dom";

class SiteNav extends React.Component {
  onLogInClicked = () => {
    userService.logIn().then(this.onLogInSuccess).catch(this.onLogInError);
  };
  onLogInSuccess = (response) => {
    console.log("Login Successful", response);
  };
  onLogInError = (errResponse) => {
    console.log("Login Fail".errResponse);
  };

  render() {
    return (
      <React.Fragment>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <NavLink to="/home">
                    <button
                      href="#"
                      className="nav-link px-2 text-secondary link-button"
                    >
                      Home
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/friends">
                    <button
                      href="#"
                      className="nav-link px-2 text-white link-button"
                    >
                      Friends
                    </button>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/cars">
                    <button
                      href="#"
                      className="nav-link px-2 text-white link-button"
                    >
                      Cars
                    </button>
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
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Tech Companies
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Jobs
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Events
                  </button>
                </li>
              </ul>

              <NavLink to="/loginmenu">
                <div className="text-end">
                  <button type="button" className="btn btn-danger btn-sm">
                    Login
                  </button>
                </div>
              </NavLink>

              <NavLink to="/register">
                <div>
                  <button type="button" className="btn btn-danger btn-sm">
                    Register
                  </button>
                </div>
              </NavLink>

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

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sabio Fellow
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {/* <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </header>
        )
      </React.Fragment>
    );
  }
}

export default SiteNav;
