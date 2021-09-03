import React, { Component } from "react";
import SiteNav from "./components/SiteNav.jsx";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Home from "./components/Home";
import AddJob from "./components/AddJob";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import * as userService from "./components/auth/userService";
import EntityForm from "./components/codechallenge/EntityForm";

import "./App.css";
import Login from "./components/Login.jsx";
import debug from "sabio-debug";
import Jobs from "./components/Jobs.jsx";
const _logger = debug.extend("App");

class App extends Component {
  state = {
    currentUser: {},
    isLoggedIn: false,
  };

  handleLogin = (data) => {
    this.setState((prevState) => {
      return { ...prevState, currentUser: data, isLoggedIn: true };
    });
  };

  logout = () => {
    console.log("logout was triggered");
    userService.logout().then(this.logoutSuccess).catch(this.logoutError);
  };

  logoutSuccess = (response) => {
    console.log(response);
    this.props.history.push("/login");
    this.setState((prevState) => {
      return { ...prevState, currentUser: {}, isLoggedIn: false };
    }, this.stateChanged);
  };
  logoutError = (response) => {
    console.log({ error: response });
  };

  stateChanged = () => {
    _logger("state change", this.state.currentUser);
    console.log("State changed", this.state.currentUser);
  };

  /*  componentDidMount() {
    if (this.state.isLoggedIn === false) {
      this.props.history.push("/login");
    }
  } */

  render() {
    return (
      <BrowserRouter>
        <SiteNav isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
        <main>
          <Route
            path="/home"
            exact={false}
            render={(routeProps) => <Home user={this.state} {...routeProps} />}
          />
          <Route path="/jobs" exact component={Jobs} />
          <Route
            path="/friends"
            exact
            render={(routeProps) => (
              <Friends user={this.state} {...routeProps} />
            )}
          />
          <Route path="/register" exact component={Register} />
          <Route
            path="/addfriend"
            exact
            render={(routeProps) => (
              <AddFriend isLoggedIn={this.state.isLoggedIn} {...routeProps} />
            )}
          />
          <Route
            path="/addfriend/:id(\d+)/edit"
            exact
            render={(routeProps) => (
              <AddFriend isLoggedIn={this.state.isLoggedIn} {...routeProps} />
            )}
          />
          <Route
            path="/addjob"
            exact
            render={(routeProps) => (
              <AddJob isLoggedIn={this.state.isLoggedIn} {...routeProps} />
            )}
          />
          <Route
            path="/login"
            exact={true}
            render={(routeProps) => (
              <Login handleLogin={this.handleLogin} {...routeProps} />
            )}
          />
          <Route path="/content" exact={true} component={Content} />
          <Route
            path="/entityform"
            exact
            render={(routeProps) => <EntityForm {...routeProps} />}
          />
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
