import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Fifth navbar example"
      >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Expand at lg</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/Home" className="nav-link" exact={true}>
                  Home
                </NavLink>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
              <li className="nav-item ">
                <NavLink to="/Friends" className="nav-link" exact={true}>
                  Friends
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/Jobs" className="nav-link" exact={true}>
                  Jobs
                </NavLink>
              </li>
            </ul>

            <div className="text-end">
              <button className="btn">
                <NavLink to="/logout" className="nav-link" exact={true}>
                  Logout
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
