import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Homepage from "./Components/Homepage";
import UserLogin from "./Components/UserLogin";
import FriendForm from "./Components/FriendForm";
import Friends from "./Components/Friends";
import Register from "./Components/Register";
import Parent from "./Components/videos/Parent";
import Navbar from "./Components/Navbar";
import Jobs from "./Components/Jobs/Jobs";
import JobForm from "./Components/Jobs/JobForm";

import Cars from "./Components/codeChallenge/Cars";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <main role="main"></main>
        <Route path="/parent" exact={true} component={Parent}></Route>
        <Route path="/jobs" exact={true} component={Jobs}></Route>
        <Route path="/jobs/add" exact={true} component={JobForm}></Route>

        <Route path="/cars" exact={true} component={Cars} />
        {/* <Route
          path="/"
          exact={true}
          render={(props) => <UserLogin {...props}></UserLogin>}
        ></Route> */}
        <Route path="/" exact={true} component={UserLogin}></Route>
        {/* <Route path="/" exact={true} component={UserLogin}></Route> */}
        <Route path="/register" exact={true} component={Register}></Route>
        <Route path="/home" exact={true} component={Homepage}></Route>
        <Route path="/friends" exact={true} component={Friends}></Route>
        <Route path="/friends/add" exact={true} component={FriendForm}></Route>
        <Route
          path="/friends/:friendId(\d+)" // ask why the colon works
          exact={true}
          component={FriendForm}
        ></Route>
      </React.Fragment>
    );
  }
}
export default App;
