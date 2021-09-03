import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import * as userService from "../services/userService";

class LoggedInNav extends React.Component {
  onLogoutClicked = () => {
    userService.logOut().then(this.onLogoutSuccess).catch(this.onLogoutError);
  };

  onLogoutSuccess = (response) => {
    console.log("Logout Successful", response);
    this.props.history.push("/");
    // show logout successful message using toast
    // return back to "/" page to prompt for registration or login
  };

  onLogoutError = (error) => {
    console.log(error);
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
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 text-white link-button"
                    to="/friends"
                  >
                    Friends
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 text-white link-button"
                    to="/blogs"
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 text-white link-button"
                    to="/techCo"
                  >
                    Tech Co.
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 text-white link-button"
                    to="/jobs"
                  >
                    Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 text-white link-button"
                    to="/events"
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
                  onClick={this.onLogoutClicked}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default withRouter(LoggedInNav);
