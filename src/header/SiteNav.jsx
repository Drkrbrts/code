import React from "react";
import { logIn } from "../services/userService";
// import { NavLink } from "react-router-dom";

class SiteNav extends React.Component {
  state = { logIn };
  onClick = () => {
    console.log("Clicked", this.state);
    var click = this.state;
    return click;
  };

  render() {
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
                <button
                  href="/home"
                  className="nav-link px-2 text-secondary link-button"
                  // onClick={this.onClick}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="nav-link px-2 text-white link-button"
                  // onClick={this.onClick}
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  href="/pricing"
                  className="nav-link px-2 text-white link-button"
                  // onClick={this.onClick}
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  href="/faq"
                  className="nav-link px-2 text-white link-button"
                  // onClick={this.onClick}
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  href="/about"
                  className="nav-link px-2 text-white link-button"
                  // onClick={this.onClick}
                >
                  About
                </button>
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

            <div className="text-end">
              <button
                type="button"
                onClick={logIn}
                className="btn btn-outline-light me-2"
              >
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default SiteNav;
