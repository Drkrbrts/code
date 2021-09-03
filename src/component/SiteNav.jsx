import React from "react";
import { logOut } from "../services/userService";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { NavDropdown } from "react-bootstrap";
// import LoginControl from "./LoginControl";
// import Login from "./Login";
// import Logout from "./Logout";

class SiteNav extends React.Component {
  onLogOutClick = () => {
    console.log("logOut clicked");

    logOut().then(this.onLogOutSuccess).catch(this.onLogOutError);
  };

  onLogOutSuccess = (response) => {
    console.log(response);
    this.props.history.push("/login");
  };

  onLogOutError = (err) => {
    console.log(err);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="p-2 bg-dark text-white">
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
                    // onClick={this.onClick}
                  >
                    <NavLink to="/home" className="nav-link">
                      Home
                    </NavLink>
                  </button>
                </li>
                <li>
                  <button
                    className="nav-link px-2 text-white link-button"
                    // onClick={this.onClick}
                  >
                    <NavLink to="/friends" className="nav-link">
                      People
                    </NavLink>
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                    // onClick={this.onClick}
                  >
                    <NavLink to="/content" className="nav-link">
                      Blogs
                    </NavLink>
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                    // onClick={this.onClick}
                  >
                    <NavLink to="/footer" className="nav-link">
                      Tech Co.
                    </NavLink>
                  </button>
                </li>
                <li>
                  <button
                    href="/jobs"
                    className="nav-link px-2 text-white link-button"
                    // onClick={this.onClick}
                  >
                    <NavLink to="/friendsform" className="nav-link">
                      Jobs
                    </NavLink>
                  </button>
                </li>
                <li>
                  <button
                    href="/events"
                    className="nav-link px-2 text-white link-button"
                    // onClick={this.onClick}
                  >
                    <NavLink to="/form" className="nav-link">
                      Events
                    </NavLink>
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
              <Avatar
                style={{ margin: "8px" }}
                src={this.props.currentUser.avatarUrl}
              />
              <div>
                {this.props.isLoggedin ? (
                  <NavDropdown
                    title={
                      this.props.currentUser.firstName
                        ? this.props.currentUser.firstName
                        : null
                    }
                  >
                    <NavDropdown.Item className="nav-link">
                      <li onClick={this.onLogOutClick} to="/login">
                        Logout
                      </li>
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="btn btn-outline-light me-2"
                    >
                      <NavLink to="/login" className="nav-link">
                        Login
                      </NavLink>
                    </button>
                    <button type="button" className="btn btn-warning">
                      <NavLink to="/register" className="nav-link">
                        Sign-up
                      </NavLink>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default SiteNav;
