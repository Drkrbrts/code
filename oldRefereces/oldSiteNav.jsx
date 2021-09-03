import React from "react";
import userService from "../services/userService";

class SiteNav extends React.Component {
  componentDidMount() {
    this.onLogInClicked();
  }

  onLogInClicked = () => {
    console.log("onLogInClicked");
    this.props.history.push("/login/");
    var payload = { email: "user@google.com", password: "password" };
    userService
      .logIn(payload)
      .then(this.onLogInSuccess)
      .catch(this.onLogInError);
  };
  on;

  onLogInSuccess = (response) => {
    console.log("login success", response);
  };
  onLogInError = (response) => {
    console.log("login error", response);
  };

  onSignUpClicked = () => {
    console.log("onSignUpClicked");
    this.props.history.push("/signup/");
  };

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
                <button
                  href="#"
                  className="nav-link px-2 text-secondary link-button"
                >
                  Home
                </button>
              </li>
              <li>
                <button className="nav-link px-2 text-white link-button">
                  Features
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  href="#"
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
                onClick={this.onLogInClicked}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.onSignUpClicked}
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SiteNav;
