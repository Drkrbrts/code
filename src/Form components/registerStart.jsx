import React from "react";
import { NavLink } from "react-router-dom";



class RegisterLogin extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <NavLink to="/loginPage" className="nav-link">Login</NavLink>
          <NavLink to="/registerPage" className="nav-link">Register</NavLink>
        </div>
      </React.Fragment>
    );
  }
}
export default RegisterLogin;
