import React from "react";
import * as userService from "../services/userService";

// import "../Home.css";

class HomePage extends React.Component {
  state = {
    isLoggedin: false,
    userName: "",
  };

  componentDidMount() {
    console.log("home page did mount ");
    userService
      .currentUser()
      .then(this.onCurrentUserSuccess)
      .catch(this.onCurrentUserError);
  }

  onCurrentUserSuccess = (response) => {
    console.log(response.data.item);
    this.setState({ userName: response.data.item.name });
    // this.props.history.push("/HomePage");
  };

  onCurrentUserError = (errResponse) => {
    // this.props.history.push("/login");
    console.log(errResponse);
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <h1>Welcome {this.state.userName}! </h1>
      </div>
    );
  }
}

export default HomePage;
