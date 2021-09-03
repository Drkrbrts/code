import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Homepage from "./Components/Homepage";
import UserLogin from "./Components/UserLogin";
import Widget from "./Components/codeChallenge/Widget";
import Register from "./Components/Register";

import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main role="main"></main>
        <Route path="/" exact={true} component={UserLogin}></Route>
        <Route path="/widget" component={Widget}></Route>
        <Route
          path="/Register"
          exact={true}
          render={() => <Register {...this.props}></Register>}
        ></Route>
        <Route path="/Home" component={Homepage}></Route>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
