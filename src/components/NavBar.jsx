import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import userService from "../services/users";

class NavBar extends React.Component {
  loginBtnClicked = () => {
    this.props.history.push("/login");
    <Redirect to={"/login"} />;
  };

  logoutBtnClicked = () => {
    userService.logout().then(this.logoutSuccess).catch(this.logoutError);
  };

  logoutSuccess = (response) => {
    console.log(response);
    this.props.setUser(null);
    this.props.history.push("/home");
  };

  logoutError = (response) => {
    console.log(response);
  };

  render() {
    if (this.props.user) {
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
                    href="/"
                    className="nav-link px-2 text-secondary link-button"
                    onClick={this.goToPage}
                  >
                    <NavLink to="/">Home</NavLink>
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    People
                  </button>
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
                    href="/techco"
                    className="nav-link px-2 text-white link-button"
                  >
                    <NavLink to="/techco">Tech Co.</NavLink>
                  </button>
                </li>
                <li>
                  <button
                    href="/jobs"
                    className="nav-link px-2 text-white link-button"
                  >
                    <NavLink to="/jobs">Jobs</NavLink>
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
                <li>
                  <button
                    href="/friends"
                    className="nav-link px-2 text-white link-button"
                  >
                    <NavLink to="/friends">Friends</NavLink>
                  </button>
                </li>
              </ul>

              <div className="text-end">
                <button
                  type="submit"
                  className="btn btn-outline-light me-2"
                  onClick={this.logoutBtnClicked}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>
      );
    } else {
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
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    People
                  </button>
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
                    Tech Co.
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
                <li>
                  <button
                    href="/friends"
                    className="nav-link px-2 text-white link-button"
                  >
                    Friends
                  </button>
                </li>
              </ul>

              <div className="text-end">
                <button
                  type="submit"
                  className="btn btn-outline-light me-2"
                  onClick={this.loginBtnClicked}
                >
                  <NavLink to="/login">Login</NavLink>
                </button>
                <button type="button" className="btn btn-warning">
                  Sign-up
                </button>
              </div>
            </div>
          </div>
        </header>
      );
    }
  }
}

export default NavBar;
