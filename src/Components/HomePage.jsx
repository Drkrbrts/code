import React, { Component } from "react";
import "./../StarterProjectAll.css";
import WelcomeUser from "./WelcomeMessageHome";
import * as userService from "../services/userService";

class Home extends Component {
  state = {
    name: "John",
  };

  componentDidMount() {
    // Get current user on homePage then current user byID
    userService
      .getCurrent()
      .then(this.onGetCurrentSuccess)
      .catch(this.onGetCurrentError);
  }

  onLoginUserClicked = (e) => {
    e.preventDefault();
    console.log("LoginButton");
    this.props.history.push("/Login");
  };

  onRegisterNewClicked = (e) => {
    e.preventDefault();
    console.log("RegisterButton");
    this.props.history.push("/Registration");
  };

  onGetCurrentSuccess = (response) => {
    // console.log(response);
    let userId = response.data.item.id;
    userService
      .userById(userId)
      .then(this.onGetByIdSuccess)
      .catch(this.onGetByIdError);
  };

  onGetCurrentError = () => {
    console.log("No User Signed In");
  };

  onGetByIdSuccess = (response) => {
    console.log(response);
    let userSignedIn = response.data.item;
    this.props.handleUserLoggedIn(userSignedIn);
    this.setState({ name: response.data.item.firstName });
  };
  onGetByIdError = (response) => {
    console.log(response);
  };

  render() {
    return (
      <div className="container-fluid title-container">
        <div className="row">
          <div className="col-lg-12 title-holder">
            <WelcomeUser {...this.props}></WelcomeUser>
            {this.props.userLoggedIn.isLoggedIn === false && (
              <React.Fragment>
                <button
                  type="button"
                  className="btn btn-dark btn-lg title-btn"
                  id="userLogin"
                  onClick={this.onLoginUserClicked}
                >
                  Login
                </button>

                <button
                  type="button"
                  className="btn btn-outline-dark btn-lg title-btn"
                  id="registerButton"
                  onClick={this.onRegisterNewClicked}
                >
                  Register
                </button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
