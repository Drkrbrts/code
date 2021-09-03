import React from "react";
import { NavLink } from "react-router-dom";

function siteNav() {
  return (
    <>
      <header className="bg-dark text-white">
        <div className="container margin-left: none">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="container">
              <div
                href="/"
                className="d-flex align-items-left mb-2 mb-lg-0 text-white text-decoration-none"
              ></div>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-10 justify-content-left mb-md-0">
                <li>
                  <NavLink
                    to="/home"
                    exact={true}
                    {...this}
                    className="nav-link px-2 text-secondary link-button"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/friends"
                    exact={true}
                    {...this}
                    className="nav-link px-2 text-white link-button"
                  >
                    Friends
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    exact={true}
                    {...this}
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/techco"
                    exact={true}
                    {...this}
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Tech Co.
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/jobs"
                    exact={true}
                    {...this}
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/events"
                    exact={true}
                    {...this}
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Events
                  </NavLink>
                </li>
                <li className="text-end">
                  <NavLink
                    to="/login"
                    exact={true}
                    {...this}
                    className="btn btn-danger me-2"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    exact={true}
                    {...this}
                    className="btn btn-danger"
                  >
                    Register
                  </NavLink>
                  <img
                    src="https://pw.sabio.la/images/Sabio.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Sabio"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default siteNav;
