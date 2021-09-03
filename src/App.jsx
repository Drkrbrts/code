import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Friend from "./components/Friends";
import CodeChallenge from "./components/code challenge/CodeChallenge";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteNav {...this.props} />
        <Route path="/signup" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/friends" exact component={Friend} />
        <Route path="/codechallenge" exact component={CodeChallenge} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
