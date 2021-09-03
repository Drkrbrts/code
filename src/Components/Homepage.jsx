import React from "react";
import Navbar from "./Navbar";
import { currentUser, logout } from "../services/userServices";

class Homepage extends React.Component {
  state = {
    currentUser: "",
  };
  componentDidMount() {
    currentUser()
      .then(this.onCurrentUserSuccess)
      .catch(this.onCurrentUserError);
  }

  logoutClicked = () => {
    logout().then(this.onLogoutSuccess).catch(this.onLogoutError);
  };

  onCurrentUserSuccess = (response) => {
    console.log(response);
    const currentUser = response.data.item.name;
    this.setState({ currentUser });
  };

  onCurrentUserError = (response) => {
    console.log(response);
  };

  onLogoutSuccess = (response) => {
    console.log(response);
    this.props.history.push("/");
  };

  onLogoutError = (response) => {
    console.log(response);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container fluid">
          <div className="row">
            <h2
              className="text-center bg-success text-white"
              style={{ "font-family": "Franklin Gothic Medium" }}
            >
              Welcome Sabio Fellow!
            </h2>
            <p className="text-center welcome-message p-3">
              current user: {` ${this.state.currentUser}`}
            </p>
            <div className="col-md-12 text-center">
              <button className="btn btn-danger" onClick={this.logoutClicked}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
