import React from "react";
import * as userService from "../services/userServices";
import { NavLink } from "react-router-dom";

class HomePage extends React.Component {
  state = {
    firstName: "First",
    lastName: "Last",
  };
  componentDidMount() {
    console.log("componentDidMount home page");
    userService.currentInfo().then(this.onInfoSuccess).catch(this.onInfoError);
  }

  onInfoSuccess = (response) => {
    console.log(response.data.item.id);
    userService
      .getUser(response.data.item.id)
      .then(this.onUserSuccess)
      .catch(this.onUserError);
  };

  onInfoError = (response) => {
    console.warn({ error: response });
  };

  onUserSuccess = (response) => {
    this.setState(() => {
      let copy = { ...this.state };
      var data = {
        firstName: response.data.item.firstName,
        lastName: response.data.item.lastName,
      };
      copy.firstName = data.firstName;
      copy.lastName = data.lastName;
      var userName = copy.firstName + " " + copy.lastName;
      console.log("getting user id success", data, userName);
      return { userName };
    });
  };

  onUserError = (response) => {
    console.warn({ error: response });
  };

    logoutUser = () => {
      // e.preventDefault()
      console.log("click");
      userService.userLogout().then(this.onLogoutSuccess).catch(this.onLogoutError);
    };

    onLogoutSuccess = () => {
      console.log("logout successful");
    };
    onLogoutError = (response) => {
      console.warn({ error: response });
    };

  render() {
    return (
      <React.Fragment>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              {/* <a
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
            </a> */}
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <NavLink to="/home/">
                    <button
                      href="#"
                      className="nav-link px-2 text-white link-button"
                    >
                      Home
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/friends">
                    <button className="nav-link px-2 text-white link-button">
                      People
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
                  <NavLink to="/techco">
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
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
              <div className="text-end">
               <NavLink to="/register"><button type="button" className="btn btn-outline-light me-2" onClick={this.logoutUser}>
                    Logout
                  </button>
                  </NavLink> 
              </div>
            </div>
          </div>
        </header>
        <div className="container-text">
          <div className="row">
            <p className="fw-bold" name="welcome">
              Welcome {this.state.userName}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HomePage;
