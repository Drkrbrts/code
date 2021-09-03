import React, { Component } from "react";
import SiteNav from "./components/siteNav.jsx";
import Jumbo from "./components/jumbo";
import Content from "./components/content.jsx";
import Footer from "./components/footer";
import Register from "./components/register";
import Home from "./components/home";
import Friends from "./components/friends";
import AddFriend from "./components/addFriend";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import * as userService from "./components/auth/userService";

import "./App.css";
import Login from "./components/login.jsx";
import debug from "sabio-debug";
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

  render() {
    return (
      <BrowserRouter>
        <SiteNav isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
        <main>
          <Route
            path="/home"
            exact={false}
            render={(routeProps) => (
              <Home user={this.state.currentUser} {...routeProps} />
            )}
          />
          <Route path="/jumbo" exact component={Jumbo}></Route>
          <Route path="/friends" exact component={Friends}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/addfriend" exact component={AddFriend} />
          <Route
            path="/login"
            exact
            render={(routeProps) => (
              <Login handleLogin={this.handleLogin} {...routeProps} />
            )}
          />
          <Route path="/content" exact={true} component={Content}></Route>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
