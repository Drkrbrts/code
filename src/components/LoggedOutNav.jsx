import React from "react";
import { NavLink } from "react-router-dom";

class LoggedOutNav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <NavLink to="/">
                    <img
                      src="https://pw.sabio.la/images/Sabio.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="Sabio"
                    />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 text-white link-button"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 text-white link-button"
                    to="/"
                  >
                    Friends
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 text-white link-button"
                    to="/"
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 text-white link-button"
                    to="/"
                  >
                    Tech Co.
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 text-white link-button"
                    to="/"
                  >
                    Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 text-white link-button"
                    to="/"
                  >
                    Events
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
                <NavLink className="btn btn-outline-light me-2" to="/login">
                  Login
                </NavLink>
                <NavLink className="btn btn-warning" to="/register">
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default LoggedOutNav;
