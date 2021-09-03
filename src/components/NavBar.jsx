import React from "react";

import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  //checkCode function expression
  onHomeClicked = (msg) => {
    console.log("User trying to return to homepage..Going Home");
    return msg;
  };
  onFeaturesClicked = (msg) => {
    console.log("User interested in features..Retrieving Page");
    return msg;
  };
  onPricingClicked = (msg) => {
    console.log("User wants to learn more about prices..Retrieving Page");
    return msg;
  };
  onFaQClicked = (msg) => {
    console.log("User has questions to ask..Retrieving Page");
    return msg;
  };
  onAboutClicked = (msg) => {
    console.log("User wants to learn more about Sabio..Retrieving Page");
    return msg;
  };
  // click-handlers above this line

  render() {
    return (
      <React.Fragment>
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
                <NavLink to="/home" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/friends" className="nav-link">
                  Friends
                </NavLink>
              </li>
              <li>
                <NavLink to="/cars" className="nav-link">
                  Cars
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
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
