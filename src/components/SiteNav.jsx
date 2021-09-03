import React from "react";
//import { BrowserRouter, Route, NavLink } from "react-router-dom";
//import Register from "./Register";
import { userLogout } from "../services/userService";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";

class SiteNav extends React.Component {
  logoutSuccess = (response) => {
    this.props.history.push("/login");
    toast.success("🦄 Logout Successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log(response);
  };

  logoutError = (err) => {
    this.props.history.push("/login");
    toast.error("Logout Error, you must be signed in to logout.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.error(err);
  };

  onRegisterClicked = (e) => {
    console.log("register was clicked");
    this.props.history.push("/register");
  };
  onLoginClicked = (e) => {
    console.log("login was clicked");
    this.props.history.push("/login");
  };

  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;

    console.log({ currentPath, previousPath });
  }

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
                <button
                  href="#"
                  className="nav-link px-2 text-secondary link-button"
                >
                  Home
                </button>
              </li>
              <li>
                <button className="nav-link px-2 text-white link-button">
                  Friends
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
                  Tech companies
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
                onClick={this.onLoginClicked}
              >
                Login!
                {/* //  <NavLink to="/login">Login Now!</NavLink> */}
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.onRegisterClicked}
              >
                Register Now!
                {/* <NavLink to="/register">Register Now!</NavLink> */}
              </button>
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={() =>
                  userLogout().then(this.logoutSuccess).catch(this.logoutError)
                }
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(SiteNav);
