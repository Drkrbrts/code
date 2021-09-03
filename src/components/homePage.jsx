import React from "react";
import userService from "../services/userService";
import { Route } from "react-router-dom";
import welcomeMessage from "./welcomeMessage";

class homePage extends React.Component {
  componentDidMount() {
    userService
      .getCurrent()
      .then(this.onGetCurrentSuccess)
      .catch(this.onGetCurrentError);
  }

  onGetCurrentSuccess = (response) => {
    console.log("CurrentUser", response);
    // {"CurrentUserId", response.data.item.id})
    let userData = response.data.item;
    var currentUser = {
      id: userData.id,
    };
    // $(".userIdDisplay").text(currentUser.id);

    userService
      .getById(currentUser.id)
      .then(this.onGetByIdSuccess)
      .catch(this.onGetByIdError);
  };
  onGetCurrentError = (response) => {
    console.log("GetCurrentError", response);
    // Route path="/login/"
  };
  onGetByIdSuccess(response) {
    console.log({ Sucess: response });
    let userDetails = response.data.item;
    return userDetails;
    // $(".welcomeMessage").text(
    //   `Welcome ${userDetails.firstName}  ${userDetails.lastName}`
    // );
    // $(".emailDisplay").text(userDetails.email);
    // $(".userImage").attr("src", userDetails.avatarUrl);
  }
  // state getUserInfo = onGetByIdSuccess()

  onGetByIdError(response) {
    console.log({ Error: response });
  }

  onSignOutClicked = () => {
    console.log("onSignOutClicked");
    userService.logout().then(this.onSignOutSuccess).catch(this.onSignOutError);
  };
  onSignOutSuccess = (response) => {
    console.log("onSignOutSuccess", response);
  };
  onSignOutError = (response) => {
    console.log("onSignOutError", response);
  };
  render() {
    return (
      <React.Fragment>
        <header className="p-3 bg-dark text-white">
          <div class="container">
            <div
              class="
            d-flex
            flex-wrap
            align-items-center
            justify-content-center justify-content-lg-start
          "
            >
              <ul
                class="
              nav
              col-12 col-lg-auto
              me-lg-auto
              mb-2
              justify-content-center
              mb-md-0
            "
              >
                <li>
                  <a href="/home" class="nav-link px-2 text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="Friends-Page.html" class="nav-link px-2 text-white">
                    People
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-2 text-white">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-2 text-white">
                    Tech Co.
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-2 text-white">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-2 text-white">
                    Events
                  </a>
                </li>
              </ul>

              <div class="text-end">
                <a href="Login-Page.html">
                  <button type="button" class="btn btn-danger loginButton">
                    Login
                  </button>
                </a>
                <a href="Register-Page.html">
                  <button class="btn btn-danger registerButton">
                    Register
                  </button>
                </a>
              </div>
              <div class="dropdown text-end">
                <a
                  class="d-block link-dark text-decoration-none dropdown-toggle"
                  id="dropdownUser"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div class="nav-link px-2 text-white userIdDisplay">
                    hello
                  </div>
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="32"
                    height="32"
                    class="rounded-circle userImage"
                  />
                </a>
                <ul
                  class="dropdown-menu text-small"
                  aria-labelledby="dropdownUser1"
                >
                  <li>
                    <a
                      type="button"
                      class="dropdown-item signOutButton"
                      onClick={this.onSignOutClicked}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <welcomeMessage
          extra={getUserInfo.firstName}
          extra2={getUserInfo.lastName}
        ></welcomeMessage>
      </React.Fragment>
    );
  }
}

export default homePage;
