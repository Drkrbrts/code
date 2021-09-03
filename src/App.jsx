import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Homepage from "./Components/Homepage";
import UserLogin from "./Components/UserLogin";
import FriendForm from "./Components/FriendForm";
import Friends from "./Components/Friends";
import Register from "./Components/Register";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main role="main"></main>
        {/* <Route
          path="/"
          exact={true}
          render={(props) => <UserLogin {...props}></UserLogin>}
        ></Route> */}
        <Route path="/" exact={true} component={UserLogin}></Route>
        {/* <Route path="/" exact={true} component={UserLogin}></Route> */}
        <Route path="/Register" exact={true} component={Register}></Route>
        <Route path="/Home" exact={true} component={Homepage}></Route>
        <Route path="/Friends" exact={true} component={Friends}></Route>
        <Route
          path="/Friends/FriendForm"
          exact={true}
          component={FriendForm}
        ></Route>
      </React.Fragment>
    );
  }
}
export default App;
