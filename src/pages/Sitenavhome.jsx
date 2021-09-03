import React from "react";
import { withRouter, NavLink, link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import { toast } from "react-toastify";

class Sitenavhome extends React.Component {
  logout = () => {
    const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/users/logout",
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };

    return axios(config)
      .then((response) => {
        console.log(response.data);
        toast.success("Successful Logout");
        this.props.history.push("/");
      })
      .catch((response) => {
        console.warn(response);
        toast.error("Logout Error");
        console.log("error");
      });
  };

  onItemClicked = (e) => {
    e.preventDefault();
    //console.log("form data", this.state);
    this.logout();

    // do handling after regiter is done here ...
  };

  pushThehome = () => {
    this.props.history.push("/thehome");
  };
  pushBlogs = () => {
    this.props.history.push("/Blogs");
  };

  pushFriends = () => {
    this.props.history.push("/Friends");
  };

  pushTech = () => {
    this.props.history.push("/Tech");
  };

  pushJobs = () => {
    this.props.history.push("/jobs");
  };

  pushEvents = () => {
    this.props.history.push("/events");
  };

  pushAddfriends = () => {
    this.props.history.push("/Addfriends");
  };

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
                  onClick={this.pushThehome}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  to="/friends"
                  className="nav-link px-2 text-secondary link-button"
                  onClick={this.pushFriends}
                >
                  Friends
                </button>
              </li>
              <li>
                <button
                  to="/blogs"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.pushBlogs}
                >
                  Blogs
                </button>
              </li>
              <li>
                <button
                  to="tech"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.pushTech}
                >
                  Tech
                </button>
              </li>
              <li>
                <button
                  to="jobs"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.pushJobs}
                >
                  Jobs
                </button>
              </li>

              <li>
                <button
                  to="events"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.pushEvents}
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  to="Addfriends"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.pushAddfriends}
                >
                  Add Friends
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
                type="submit"
                class="btn btn-success btn-lg btn-block"
                onClick={this.onItemClicked}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
    ); // multi-line expression wrapp in ()
  }
}

export default withRouter(Sitenavhome);
