import React from "react";
import * as userService from "../services/userService";

class Home extends React.Component {
  onLogoutClicked = (e) => {
    e.preventDefault();
    console.log("logout was clicked");
    this.props.history.push("/login");
    userService.logOut().then(this.onLogOutSuccess).catch(this.onLogOutError);
  };
  onLogOutSuccess = (response) => {
    console.log(response);
  };
  onLogOutError = (errResponse) => {
    console.log(errResponse);
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
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Friends
                </button>
              </li>
              <li>
                <button className="nav-link px-2 text-white link-button">
                  Jobs
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Events
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
                  Tech Companies
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

            <button
              type="button"
              className="btn btn-warning"
              onclick={this.onLogoutClicked}
            >
              Log Out
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
