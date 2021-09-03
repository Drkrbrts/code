import React from "react";
import { NavLink } from "react-router-dom";

export default function SiteNav(props) {
  let navBar;
  props.isLoggedIn
    ? (navBar = <MemberNav onLogoutRequest={props.onLogoutRequest} />)
    : (navBar = <GuestNav />);

  return navBar;
}

function MemberNav(props) {
  let onLogoutClick = (e) => {
    e.preventDefault();
    props.onLogoutRequest();
  };

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
              <NavLink to="/home">
                <button className="nav-link px-2 text-white link-button">
                  Home
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/friends">
                <button className="nav-link px-2 text-white link-button">
                  Friends
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/techcos">
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Tech Co.
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs">
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Jobs
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/events">
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Events
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cars">
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  CC Cars
                </button>
              </NavLink>
            </li>
          </ul>
          <div className="text-end">
            <button
              type="button"
              className="btn btn-danger"
              onClick={onLogoutClick}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function GuestNav() {
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
              <NavLink to="/home">
                <button className="nav-link px-2 text-white link-button">
                  Home
                </button>
              </NavLink>
            </li>
            <li>
              <button className="nav-link px-2 disabled link-button">
                Friends
              </button>
            </li>
            <li>
              <button href="#" className="nav-link px-2 disabled link-button">
                Tech Co.
              </button>
            </li>
            <li>
              <button href="#" className="nav-link px-2 disabled link-button">
                Jobs
              </button>
            </li>
            <li>
              <button href="#" className="nav-link px-2 disabled link-button">
                Events
              </button>
            </li>
          </ul>
          <div className="text-end">
            <NavLink to="/login">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
            </NavLink>
            <NavLink to="/register">
              <button type="button" className="btn btn-warning">
                Register
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
