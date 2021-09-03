import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { logOut, current } from "../services/userService";

class Home extends React.Component {
  onLogoutClicked = () => {
    logOut().then(this.onLogOutSuccess).catch(this.onLogOutError);
  };
  onLogOutSuccess = (response) => {
    console.log(response);
    this.props.history.push("/login");
  };
  onLogOutError = (response) => {
    console.warn(response);
  };

  // componentDidMount() {
  //   this.onCurrentUserRender();
  // }
  onCurrentUserRender = () => {
    current().then(this.onUserRenderSuccess).catch(this.onUserRenderError);
  };
  onUserRenderSuccess = (response) => {
    console.log(response.data.item.name);
    var userName = response.data.item.name;
    return userName;
  };
  onUserRenderError = (response) => {
    console.warn(response);
  };

  render() {
    return (
      <React.Fragment>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/home"
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
                  <NavLink to="/home">
                    <button className="nav-link px-2 text-white link-button">
                      Home
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/friends">
                    <button className="nav-link px-2 text-white link-button">
                      Friends
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">
                    <button className="nav-link px-2 text-white link-button">
                      Blogs
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/techcompanies">
                    <button className="nav-link px-2 text-white link-button">
                      Tech Co.
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/jobs">
                    <button className="nav-link px-2 text-white link-button">
                      Jobs
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/events">
                    <button className="nav-link px-2 text-white link-button">
                      Events
                    </button>
                  </NavLink>
                </li>
              </ul>

              <div className="text-end">
                <NavLink to="/login">
                  <button
                    type="button"
                    className="btn btn-outline-light me-2"
                    onClick={this.onLogoutClicked}
                  >
                    Logout
                  </button>
                </NavLink>
                <NavLink to="/register">
                  <button type="button" className="btn btn-warning">
                    Sign-up
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </header>
        <div>
          <h1 style={{ padding: "15px" }}>Welcome {this.props.name}</h1>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
