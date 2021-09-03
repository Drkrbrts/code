import React from "react";
import UserNav from "../components/UserNav";
//import { Route } from "react-router-dom";
//import * as userService from "../services/userService"
// import Register from "./tasks/Register";
// import LogIn from "./tasks/LogIn";

class UserHome extends React.Component {
  render() {
    return (
      <>
        <UserNav {...this.props} />
        <main role="main"></main>
      </>
    );
  }
}

export default UserHome;
