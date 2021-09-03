import React from "react";
///import Register from "./pages/Register";
import { Link } from "react-router-dom";

class SiteNav extends React.Component {
  onItemClicked = () => {};

  render() {
    return (
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div>{/* <Route path="Register" component={Register} /> */}</div>
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
                  to="/"
                  className="nav-link px-2 text-secondary link-button onClick"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  to="/features"
                  className="nav-link px-2 text-white link-button"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  to="/pricing"
                  className="nav-link px-2 text-white link-button"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  to="faqs"
                  className="nav-link px-2 text-white link-button"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  to="about"
                  className="nav-link px-2 text-white link-button"
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
                className="btn btn-outline-light me-2"
              ></button>
              <div>
                <Link to="/theLogin">Login</Link>
              </div>
              <div>
                <Link to="/register">Sign-up</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    ); // multi-line expression wrapp in ()
  }
}

export default SiteNav;
