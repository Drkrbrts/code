import React from "react";
import { NavLink } from "react-router-dom";
// import Login from "./Login";

class Home extends React.Component {
  render() {
    return (
      <nav>
        <div className="text-end">
          <button
            type="button"
            // onClick={this.onClick}
            className="btn btn-outline-light me-2"
          >
            <NavLink to="/login">Log In</NavLink>
          </button>

          <button type="button" className="btn btn-warning">
            <NavLink to="/register">Sign-up</NavLink>
          </button>
        </div>
      </nav>
    );
  }
}

export default Home;
