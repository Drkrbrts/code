import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../services/userService";

class SiteNav extends React.Component {

  state = {
    user: []
  };

  componentDidMount() {
    userService.getCurrent()
  .then(this.onActionSuccess)
  .catch(this.onActionError);
}

onActionSuccess = (response) => {
  console.log(response);
  this.setState({user: response.data.item});
}

onActionError = (errResponse) => {
  console.warn(errResponse);
}
  
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
    const userData = {...this.state.user};
    userService.logOut(userData.id)
      .then(this.onLogoutSuccess)
      .catch(this.onLogoutError);
  }

  onLogoutSuccess = (response) => {
    console.log(response);
    window.location = "/login";
  }
 
  onLogoutError = (errResponse) => {
    console.warn(errResponse);
    
  }
    
  onHomeClicked = () => {
    console.log("onHomeClicked was clicked");
    this.props.history.push("/home");
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

  onWidgetsClicked = () => {
    console.log("onWidgetsClicked was clicked");
    this.props.history.push("/widget");
  }

  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;
    console.log({ previousPath, currentPath});
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
                  className="d-inline-block align-top me-2"
                  alt="Sabio"
                />
              </a>
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link to="/home" style={{ textDecoration: 'none' }}>
                    <button
                      href="/home"
                      className="nav-link px-2 text-secondary link-button"
                      onClick={this.onHomeClicked}>
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/friends" style={{ textDecoration: 'none' }}>
                    <button
                      href="/friends" 
                      className="nav-link px-2 text-white link-button" 
                      onClick={this.onFriendsClicked}>
                      Friends
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" style={{ textDecoration: 'none' }}>
                    <button
                      href="/blogs"
                      className="nav-link px-2 text-white link-button"
                      onClick={this.onBlogsClicked}>
                      Blogs
                    </button>
                  </Link>
                </li>
                <li>
                <Link to="/techCo" style={{ textDecoration: 'none' }}>
                  <button
                    href="/techCo"
                    className="nav-link px-2 text-white link-button"
                    onClick={this.onTechCoClicked}>
                    Tech Co.
                  </button>
                </Link>
                </li>
                <li>
                <Link to="/jobs" style={{ textDecoration: 'none' }}>
                  <button
                    href="/jobs"
                    className="nav-link px-2 text-white link-button"
                    onClick={this.onJobsClicked}>
                    Jobs
                  </button>
                </Link>
                </li>
                <li>
                <Link to="/events" style={{ textDecoration: 'none' }}>
                  <button
                    href="/events"
                    className="nav-link px-2 text-white link-button"
                    onClick={this.onEventsClicked}>
                    Events
                  </button>
                </Link>
                </li>
                <li>
                <Link to="/widget" style={{ textDecoration: 'none' }}>
                  <button
                    href="/widget"
                    className="nav-link px-2 text-white link-button"
                    onClick={this.onWidgetsClicked}>
                    Widget
                  </button>
                </Link>
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
                <Link to="/register">
                  <button type="button" className="btn btn-warning me-2" onClick={this.onRegisterClicked}>Register</button>
                </Link>
                <Link to="/login">
                  <button type="button" className="btn btn-light me-2" onClick={this.onLoginClicked}>
                  Login
                  </button>
                </Link>
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