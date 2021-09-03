import React from "react";
import * as userService from "../services/userService";

class SiteNav extends React.Component {
  
  onLoginClicked = () => {
    console.log("onLoginClicked was clicked");
    this.props.history.push("/login");
  }

  onRegisterClicked = () => {
    console.log("onRegisterClicked was clicked");
    this.props.history.push("/register");
  }

  onLogoutClicked = () => {
    console.log("onLogoutClicked was clicked");
    this.props.history.push("/logout");
  }
    
  onHomeClicked = () => {
    console.log("onHomeClicked was clicked");
    this.props.history.push("/");
  }

  onFriendsClicked = () => {
    console.log("onFriendsClicked was clicked");
    this.props.history.push("/friends");
  }

  onBlogsClicked = () => {
    console.log("onBlogsClicked was clicked");
    this.props.history.push("/blogs");
  }

  onTechCoClicked = () => {
    console.log("onTechCoClicked was clicked");
    this.props.history.push("/techCo");
  }

  onJobsClicked = () => {
    console.log("onJobsClicked was clicked");
    this.props.history.push("/jobs");
  }

  onEventsClicked = () => {
    console.log("onEventsClicked was clicked");
    this.props.history.push("/events");
  }

  componentDidMount() {
    const data = {};
    userService.logIn(data)
    .then(this.onActionSuccess)
    .catch(this.onActionError);
  }

  onActionSuccess = (response) => {
    console.log(response);
  }
   
  onActionError= (errResponse) => {
    console.warn(errResponse);
  }

  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;
    console.log({currentPath, previousPath});
  }

    render() {
        return(
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
                    className="nav-link px-2 text-secondary link-button"
                    onClick={this.onHomeClicked}>
                    Home
                  </button>
                </li>
                <li>
                  <button className="nav-link px-2 text-white link-button" onClick={this.onFriendsClicked}>
                    Friends
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                    onClick={this.onBlogsClicked}>
                    Blogs
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                    onClick={this.onTechCoClicked}>
                    Tech Co.
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                    onClick={this.onJobsClicked}>
                    Jobs
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                    onClick={this.onEventsClicked}>
                    Events
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
                <button type="button" className="btn btn-light me-2" onClick={this.onLoginClicked}>
                  Login
                </button>
                <button type="button" className="btn btn-warning me-2" onClick={this.onRegisterClicked}>
                  Register
                </button>
                <button type="button" className="btn btn-danger me-2" onClick={this.onLogoutClicked}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>
        
        );
    }
}

export default SiteNav;