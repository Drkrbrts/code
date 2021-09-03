import React from "react";
import { logout } from "../services/userServices";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  logoutClicked = () => {
    logout().then(this.onLogoutSuccess).catch(this.onLogoutError);
  };

  onLogoutSuccess = (response) => {
    console.log(response);
    this.props.history.push("/");
  };

  onLogoutError = (response) => {
    console.log(response);
  };
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
                <NavLink to="/home" className="nav-link" exact={true}>
                  Home
                </NavLink>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
              <li className="nav-item ">
                <NavLink to="/friends" className="nav-link" exact={true}>
                  Friends
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/jobs" className="nav-link" exact={true}>
                  Jobs
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/blogs" className="nav-link" exact={true}>
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/techcompanies" className="nav-link" exact={true}>
                  Tech Companies
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/events" className="nav-link" exact={true}>
                  Events
                </NavLink>
              </li>
            </ul>

            {/* A Link to Friends
              A Link Blogs
              A Link Tech companies
              A Link Jobs
              A Link Events */}

            <div className="text-end">
              <button className="btn btn-primary" onClick={this.logoutClicked}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
