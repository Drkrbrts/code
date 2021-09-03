import React from "react";
import * as userService from "../services/userService";
import { NavLink } from "react-router-dom";
// change to class function and replace declared functions with function expressions
class SiteNav extends React.Component {
  onClickHandler = () => {
    const data = {
      email: "Chris@Sabio.com",
      password: "Password12!",
      tenantId: "ChrisSabio",
    };
    userService
      .logIn(data)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  };

  onActionSuccess = (response) => {
    console.log("Login Success", response);
  };

  onActionError = (errResponse) => {
    console.warn("Login Process Failed", { error: errResponse });
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
              <NavLink
                to="/Home"
                className="nav-link px-2 text-secondary link-button"
              >
                <li className="text-link">Home</li>
              </NavLink>
              <NavLink
                to="/People"
                className="nav-link px-2 text-white link-button"
              >
                <li className="text-link">People</li>
              </NavLink>
              <NavLink
                to="/Blogs"
                className="nav-link px-2 text-white link-button"
              >
                <li className="text-link">Blogs</li>
              </NavLink>
              <NavLink
                to="/Tech Co"
                className="nav-link px-2 text-white link-button"
              >
                <li className="text-link">Tech Co.</li>
              </NavLink>
              <li>
                <NavLink
                  to="/Jobs"
                  className="nav-link px-2 text-white link-button"
                >
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Events"
                  className="nav-link px-2 text-white link-button"
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
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={this.onClickHandler}
              >
                Login
              </button>
              <NavLink to="/Register" className="btn btn-warning">
                <li>Sign-up</li>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default SiteNav;
