import React from "react";
import "rc-pagination/assets/index.css";
import { logOut, getCurrentUser } from "../services/userService";
// import { Link } from "react-router-dom";
// import * as userService from "../services/userService";

class Home extends React.Component {
  state = {
    name: "",
    id: "",
  };

  componentDidMount() {
    getCurrentUser().then(this.currentSuccess).catch(this.currentError);
    // this.setState((prevState) => {
    //   return { name: "Matt" };
    // });
  }

  onLogInUserClicked = (e) => {
    e.preventDefault();
    console.log("Log in was clicked");
    this.props.history.push("/login");
  };

  onRegisterNewClicked = (e) => {
    e.preventDefault();
    console.log("Register was clicked");
    this.props.history.push("/register");
  };

  currentSuccess = (response) => {
    console.log(response, { "currentSuccess!!": response.data.item.name });
    let userName = response.data.item.name;
    console.log(userName);
    // .userById(userId)
    // .then(this.onGetByIdSuccess)
    // .catch(this.onGetByIdError);
    this.setState({ name: userName });
  };

  currentError = (response) => {
    console.log(response, "Current Error");
  };

  onLogOutClicked = (e) => {
    console.log("Log Out was clicked" + new Date());
    logOut().then(this.logOutSuccess).catch(this.logOutError);
    this.props.history.push("/login");
  };

  logOutSuccess = (response) => {
    console.log("Logged out");
  };

  logOutError = (response) => {
    console.log("Log Out Error");
  };

  onRegisterClicked = (e) => {
    console.log("Register was clicked" + new Date());
    this.props.history.push("/register");
  };

  render() {
    return (
      <React.Fragment>
        Welcome {`${this.state.name}`}
        <div>
          <button
            type="submit"
            className="btn btn-outline-secondary"
            onClick={this.onLogOutClicked}
          >
            Log Out
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-outline-secondary"
            onClick={this.onRegisterClicked}
          >
            Register
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
