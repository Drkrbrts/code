import React from "react";
import defaultExport from "./StarterTask/UserStart/userService";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

class NavigationBar extends React.Component {
  signOutUser = () => {
    defaultExport
      .logOut()
      .then(this.onLogOutSuccess)
      .catch(this.onlogOutFailure);
  };

  onLogOutSuccess = (data) => {
    console.log(data);
    toast.success("Success");
    this.props.history.push("/login");
  };

  onlogOutFailure = (data) => {
    console.warn(data);
    toast.error("error");
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <button
              type="button"
              onClick={this.signOutUser}
              className="btn btn-primary logOutButton"
            >
              Sign Out
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/friends">
                    Friends
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blogs">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/techcompanies">
                    Tech Companies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/events">
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/jobs">
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavigationBar;
