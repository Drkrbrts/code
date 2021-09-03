import React from "react";
import * as userService from "../services/userService";

class Home extends React.Component {
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
    // this.props.history.push("/home");
    console.log(response.data.item);
    // let newValue = true;
    this.setState({ userName: response.data.item.name });
    // this.setState = () => {
    //   let newState = {};
    this.props.history.push("/home");
    //   newState.currentlyLoggedIn = newValue;
    //   newState.userName = response.data.item.name;
    //   console.log(newState.userName);

    // return newState;
    // };
  };
  onCurrentUserError = (errResponse) => {
    this.props.history.push("/login");
    console.log(errResponse);
  };

  render() {
    return (
      <div className="container">
        <div className="row py-3">
          {this.state.currentlyLoggedIn ? (
            ""
          ) : (
            <h2>Welcome {this.state.userName} !</h2>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
