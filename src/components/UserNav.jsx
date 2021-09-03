import React from "react";

//import * as userService from "../services/userService";

class UserNav extends React.Component {
  onRegisterClicked = (e) => {
    e.preventDefault();

    console.log("onRegisterClicked was clicked", new Date());
    this.props.history.push("/register");
  };

  onLoginClicked = (e) => {
    e.preventDefault();

    this.props.history.push("/login");
  };

  render() {
    return (
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
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
                <button className="nav-link px-2 text-white link-button">
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
            </ul>

            <div className="text-end">
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={this.onLoginClicked}
              >
                Login
              </button>

              <button
                type="button"
                className="btn btn-warning"
                onClick={this.onRegisterClicked}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default UserNav;
