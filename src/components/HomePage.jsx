import React from "react";
import userService from "../services/userService";
import { withRouter } from "react-router-dom";

class HomePage extends React.Component {
  state = {
    currentUser: { isLoggedIn: false, name: "placeholder" },
  };

  componentDidMount() {
    userService
      .currentUser()
      .then(this.onCurrentUserSuccess)
      .catch(this.onCurrentUserError);
  }

  onCurrentUserSuccess = (response) => {
    // console.log(response.data.item.name);
    this.setState((prevState) => {
      let currentUser = { ...prevState.currentUser };
      currentUser.name = response.data.item.name;
      currentUser.isLoggedIn = true;
      return { currentUser };
    });
  };

  onCurrentUserError = (response) => {
    console.log(response.response.data.Errors);
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col p-5 text-center">
            {/* <h2>Welcome { isLoggedIn ? "true" : "not"}</h2> */}
            {this.state.currentUser.isLoggedIn ? (
              <h2>Welcome {this.state.currentUser.name}</h2>
            ) : (
              <h2>Welcome, please</h2>
            )}
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);
