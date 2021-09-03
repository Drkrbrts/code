import React, { Component } from "react";
import SiteNav from "./components/componentize/SiteNav.jsx";
import Content from "./components/componentize/Content.jsx";
import Footer from "./components/componentize/Footer";
import Register from "./components/Register";
import Home from "./components/Home";
import AddJob from "./components/jobs/AddJob";
import Friends from "./components/friends/Friends";
import AddFriend from "./components/friends/AddFriend";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import * as userService from "./components/auth/userService";
import EntityForm from "./components/codechallenge/EntityForm";
import Cars from "./components/codechallenge/Cars";
import AddCompany from "./components/techcompanies/AddCompany.jsx";
import TechCompanies from "./components/techcompanies/TechCompanies";
import Events from "./components/Events";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";

import "./App.css";
import Login from "./components/Login.jsx";
import debug from "sabio-debug";
import Jobs from "./components/jobs/Jobs.jsx";
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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <SiteNav isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
          <main>
            <Route
              path="/home"
              exact={false}
              render={(routeProps) => (
                <Home user={this.state} {...routeProps} />
              )}
            />
            <Route
              path="/techco"
              exact
              render={(routeProps) => (
                <TechCompanies
                  isLoggedIn={this.state.isLoggedIn}
                  {...routeProps}
                />
              )}
            />
            <Route
              path="/addcompany/:id(\d+)/edit"
              exact
              render={(routeProps) => (
                <AddCompany
                  isLoggedIn={this.state.isLoggedIn}
                  {...routeProps}
                />
              )}
            />
            <Route
              path="/jobs"
              exact
              render={(routeProps) => (
                <Jobs isLoggedIn={this.state.isLoggedIn} {...routeProps} />
              )}
            />
            <Route
              path="/events"
              exact
              render={(routeProps) => <Events {...routeProps} />}
            />
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
              path="/addjob/:id(\d+)/edit"
              exact
              render={(routeProps) => <AddJob {...routeProps} />}
            />
            <Route path="/addcompany" exact component={AddCompany} />
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
            <Route
              path="/cars"
              exact
              render={(routeProps) => <Cars {...routeProps} />}
            />
          </main>
          <Footer />
        </LocalizationProvider>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
