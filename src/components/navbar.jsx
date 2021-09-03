import React from "react";
import { NavLink } from "react-router-dom";
import * as userService from "../services/userService";
import { toast } from "react-toastify";

class Navbar extends React.Component {
  logOutUser = (e) => {
    userService.logOut().then(this.onLogOutSuccess).catch(this.onLogOutError);
  };

  onLogOutSuccess = (response) => {
    console.log(response);
    toast.success("You have successfully logged out.");
    this.props.updateUserStatus(false);
  };
  onLogOutError = (response) => {
    console.log(response);
    toast.error("Unable to logout user.");
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container d-flex flex-wrap align-items-center justify-content-start col-lg-10">
          <ul className="nav d-flex">
            <NavLink to="/home" className="text-link">
              <li className="nav-link">Home</li>
            </NavLink>
            <NavLink to="/people" className="text-link">
              <li className="nav-link">People</li>
            </NavLink>
            <NavLink to="/blogs" className="text-link">
              <li className="nav-link">Blogs</li>
            </NavLink>
            <NavLink to="/tech" className="text-link">
              <li className="nav-link">Tech Co.</li>
            </NavLink>
            <NavLink to="/jobs" className="text-link">
              <li className="nav-link">Jobs</li>
            </NavLink>
            <NavLink to="/events" className="text-link">
              <li className="nav-link">Events</li>
            </NavLink>
          </ul>
        </div>
        <div className="col-lg-2">
          <ul className="nav d-flex ">
            {/* <NavLink to="/register" className="text-link">
              <li className="nav-link mx-2">Register</li>
            </NavLink> */}
            {!this.props.userLoggedIn && (
              <NavLink to="/register" className="text-link">
                <li className="nav-link mx-2">Register</li>
              </NavLink>
            )}
            {!this.props.userLoggedIn && (
              <NavLink to="/login" className="text-link">
                <li className="nav-link mx-2">Log In</li>
              </NavLink>
            )}
            {this.props.userLoggedIn && (
              <NavLink to="/login" className="text-link">
                <li className="nav-link mx-2" onClick={this.logOutUser}>
                  Log Out
                </li>
              </NavLink>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
