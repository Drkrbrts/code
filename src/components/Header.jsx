import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import userService from "../services/userService";
import { toast } from "react-toastify";
import "./compStyle.css";

class SiteNav extends React.Component {
  state = {
    currentUser: { isLoggedIn: false, name: "placeholder" },
  };

  componentDidMount() {
    userService
      .currentUser()
      .then(this.onCurrentUserSuccess)
      .catch(this.onCurrentUserError);
  }

  onCurrentUserSuccess = (response) => {
    // console.log(response.data.item.name);
    this.setState((prevState) => {
      let currentUser = { ...prevState.currentUser };
      currentUser.name = response.data.item.name;
      currentUser.isLoggedIn = true;
      return { currentUser };
    });
  };

  onCurrentUserError = (response) => {
    console.log(response.response.data.Errors);
  };

  onLogOutCLick = () => {
    console.log("onLogOutCLick is firing...");
    userService.logOut().then(this.onLogOutSuccess).catch(this.onLogOutError);
  };

  onLogOutSuccess = (response) => {
    console.log(response);
    toast.success("Log Out Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.history.push("/homePage");
  };

  onLogOutError = (response) => {
    console.log({ response });
    toast.warn(`${response.response.data.errors}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <header className="p-3 text-white header-element">
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
                <NavLink
                  className="nav-link px-2 text-white link-button"
                  to="/homepage"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link px-2 text-white link-button"
                  to="/friends"
                >
                  People
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
                  Tech Co.
                </button>
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
              {this.state.currentUser.isLoggedIn ? (
                <button
                  type="button"
                  className="btn btn-primary m-1"
                  onClick={this.onLogOutCLick}
                >
                  Log Out
                </button>
              ) : (
                <NavLink className="btn btn-primary m-1" to="/login">
                  Log In
                </NavLink>
              )}

              <NavLink className="btn btn-primary m-1" to="/register">
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(SiteNav);
