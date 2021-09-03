import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  const onLogoutClicked = (e) => {
    console.log("onLogoutClicked");
    e.preventDefault();
    props.onLogoutRequested();
  };
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        {props.isLoggedIn ? (
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
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
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 align-items-center justify-content-center mb-md-0">
              <li>
                <NavLink to="/">
                  <span className="px-2">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/friends">
                  <span className="px-2">Friends</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs">
                  <span className="px-2">Blogs</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/techcompanies">
                  <span className="px-2">Tech Companies</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/jobs">
                  <span className="px-2">Jobs</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/events">
                  <span className="px-2">Events</span>
                </NavLink>
              </li>
            </ul>

            <div className="text-end">
              <span>{props.currentUser.email}</span>
              <img
                src={props.currentUser.avatarUrl}
                width="40"
                height="40"
                className="d-inline-block align-top mx-2 rounded-circle"
                alt="Sabio"
              />
              <button
                type="button"
                className="btn btn-warning"
                onClick={onLogoutClicked}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
            <img
              src="https://pw.sabio.la/images/Sabio.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Sabio"
            />
            <div className="text-end">
              <NavLink to="/login">
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button type="button" className="btn btn-info">
                  Register
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
