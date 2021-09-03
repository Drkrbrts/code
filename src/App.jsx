import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import SiteNav from "./components/SiteNav";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Friends from "./components/Friends";
import TechCos from "./components/TechCos";
import Jobs from "./components/Jobs";
import Events from "./components/Events";

import Product from "./components/codechallenge/Product";
import Cars from "./components/codechallenge/Cars";

import * as usersService from "./services/usersService";

export default class App extends React.Component {
  state = {
    tenantId: "U020PEB8DCP",
    isLoggedIn: false,
  };
  componentDidMount() {
    usersService
      .current()
      .then(this.onCurrentSucces)
      .catch(this.onCurrentError);
  }
  onCurrentSucces = (response) => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      currentUserName: response.data.item.name,
    });
  };
  onCurrentError = (error) => {
    console.log(error);
  };

  onLoginRequest = (payload) => {
    usersService
      .login(payload)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  };
  onLoginSuccess = (response) => {
    console.log(response);
    this.setState({ isLoggedIn: true });
  };
  onLoginError = (error) => {
    console.log(error);
  };

  onLogoutRequest = () => {
    usersService.logout().then(this.onLogoutSuccess).catch(this.onLogoutError);
  };
  onLogoutSuccess = (response) => {
    console.log(response);
    this.setState({ isLoggedIn: false });
  };
  onLogoutError = (error) => {
    console.log(error);
  };

  render() {
    return (
      <BrowserRouter>
        <SiteNav
          isLoggedIn={this.state.isLoggedIn}
          onLogoutRequest={this.onLogoutRequest}
        />
        <main role="main" className="container mt-5">
          <Route
            path="/home"
            exact
            component={() => (
              <Home
                isLoggedIn={this.state.isLoggedIn}
                currentUserName={this.state.currentUserName}
              />
            )}
          />
          <Route
            path="/register"
            exact
            component={() => <Register tenantId={this.state.tenantId} />}
          />
          <Route
            path="/login"
            exact
            component={() => (
              <Login
                tenantId={this.state.tenantId}
                onLoginRequest={this.onLoginRequest}
              />
            )}
          />
          <Route path="/friends" component={Friends} />
          <Route path="/techcos" component={TechCos} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/events" component={Events} />
          <Route path="/product" component={Product} />
          <Route path="/cars" component={Cars} />
        </main>
      </BrowserRouter>
    );
  }
}
