import React from "react";
import * as userService from "../services/userService";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  componentDidMount() {
    this.userWelcome();
  }

  userWelcome = () => {
    userService
      .currentUser()
      .then(this.onCurrentUserSuccess)
      .catch(this.onCurrentUserError);
  };

  onCurrentUserSuccess = (response) => {
    console.log("success");
    this.setState(response.data.item);
    // getbyId()
    console.log(this.state);
  };
  onCurrentUserError = (errResponse) => {
    console.log(errResponse);
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-5 fw-bold">Welcome {this.state.name}</h1>
      </div>
    );
  }
}

export default Homepage;
