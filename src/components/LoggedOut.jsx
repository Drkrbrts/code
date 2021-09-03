import React from "react";
import { NavLink } from "react-router-dom";

class LoggedOut extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-9 fw-bold">
              Looks like you are not Logged in
            </h1>
            <NavLink to="LogIn">Login in here to continue</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default LoggedOut;
