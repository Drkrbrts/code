import React from "react";
import { NavLink } from "react-router-dom";
class SiteNav extends React.Component {
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
                <NavLink
                  href="#"
                  className="nav-link px-2 text-secondary link-button"
                  to="/LoggedIn"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  to="/Friends"
                >
                  Friends
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  to="Blog"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  to="Tech"
                >
                  Tech Co.
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  to="Jobs"
                >
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className="nav-link px-2 text-white link-button"
                  to="Events"
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
            <div>
              <NavLink className="btn btn-outline-light" to="/logIn">
                log In
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default SiteNav;
