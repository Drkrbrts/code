import React, { Component } from "react";
import userService from "../services/userServices";

class Home extends Component {
  state = {
    currentlyLoggedIn: false,
    userName: "",
  };

  componentDidMount() {
    userService
      .currentUser()
      .then(this.onCurrentUserSuccess)
      .catch(this.onCurrentUserError);
  }
  onCurrentUserSuccess = (response) => {
    // console.log(response);
    let newValue = true;

    this.setState(() => {
      let newState = {};

      newState.currentlyLoggedIn = newValue;
      newState.userName = response.data.item.name;

      // console.log(newState);
      return newState;
    });
  };

  onCurrentUserError = (errResponse) => {
    this.props.history.push("/login");
    // console.log({ errResponse });
  };

  //   onLogoutClicked = () => {
  //     console.log("Logout was clicked");
  //   };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row py-3">
            {this.state.currentlyLoggedIn ? (
              <h2>Welcome {this.state.userName}!</h2>
            ) : (
              ""
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
