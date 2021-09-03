import React, { Component } from "react";
import "./../StarterProjectAll.css";
import WelcomeUser from "./WelcomeMessageHome";

class Home extends Component {
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
  componentDidMount = () => {
    console.log("Component Did Mount");
  };

  render() {
    return (
      <div className="container-fluid title-container">
        <div className="row">
          <div className="col-lg-12 title-holder">
            {/* Welcome Message */}
            <WelcomeUser></WelcomeUser>
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
          </div>
          <div>
            Is user loggedIn? {this.props.currentUser.isLoggedIn ? "Yes" : "No"}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
