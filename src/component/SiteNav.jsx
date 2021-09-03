import React from "react";
import { logOut } from "../services/userService";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

class SiteNav extends React.Component {
  onLogOutClick = (e) => {
    logOut().then(this.onLogOutSuccess).catch(this.onLogOutError);
  };

  onLogOutSuccess = (response) => {
    console.log(response);
    this.props.history.push("/login");
  };

  onLogOutError = (err) => {
    console.warn(err);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="p-3 bg-dark text-white">
          <div>
            {this.props.isLoggedin ? (
              <button
                type="button"
                // onClick={this.onClick}
                className="btn btn-outline-light me-2"
                onClick={this.onLogOutClick}
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Sign Up</NavLink>
              </>
            )}
          </div>
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
                    <NavLink to="/home">Home</NavLink>
                  </button>
                </li>
                <li>
                  <button
                    className="nav-link px-2 text-white link-button"
                    // onClick={this.onClick}
                  >
                    <NavLink to="/jumbo">People</NavLink>
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                    // onClick={this.onClick}
                  >
                    <NavLink to="/content">Blogs</NavLink>
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                    // onClick={this.onClick}
                  >
                    <NavLink to="/footer">Tech Co.</NavLink>
                  </button>
                </li>
                <li>
                  <button
                    href="/jobs"
                    className="nav-link px-2 text-white link-button"
                    // onClick={this.onClick}
                  >
                    Jobs
                  </button>
                </li>
                <li>
                  <button
                    href="/events"
                    className="nav-link px-2 text-white link-button"
                    // onClick={this.onClick}
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
                  // onClick={this.onClick}
                  className="btn btn-outline-light me-2"
                >
                  <NavLink to="/login">Login</NavLink>
                </button>
                <button type="button" className="btn btn-warning">
                  <NavLink to="/register">Sign-up</NavLink>
                </button>
              </div>
              <div className="avatar">
                <Avatar style={{ margin: "8px" }} src="/broken-image.jpg" />
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default SiteNav;
