import React, { Component } from "react";
import RegistrationForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import Navbar from "./Components/NavBar";
import Home from "./Components/HomePage";
import FriendsPage from "./Components/FriendsPage";
import "./App.css";
import addOrEditFriend from "./Components/addOrEditFriend";
import { withRouter, Route, Switch } from "react-router-dom";
import Jobs from "./Components/Jobs";
import addOrEditJobs from "./Components/addOrEditJobs";

import Cars from "./Components/CodeChallenges/Cars";

class App extends Component {
  state = {
    currentUser: {
      user: {},
      isLoggedIn: false,
    },
  };

  handleUserLoggedIn = (data) => {
    this.setState({
      currentUser: {
        user: { data },
        isLoggedIn: true,
      },
    });
  };

  handleUserLogOut = () => {
    this.setState({
      currentUser: {
        user: null,
        isLoggedIn: false,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          {...this.props}
          userLoggedIn={this.state.currentUser}
          handleLogOut={this.handleUserLogOut}
        ></Navbar>

        <Cars></Cars>

        {/* <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                {...this.props}
                handleUserLoggedIn={this.handleUserLoggedIn}
                userLoggedIn={this.state.currentUser}
              ></Home>
            )}
          />
          <Route
            path="/Login"
            exact
            render={() => <LoginForm {...this.props}></LoginForm>}
          />

          <Route
            path="/Registration"
            exact
            render={() => (
              <RegistrationForm
                {...this.props}
                currentUser={this.state}
              ></RegistrationForm>
            )}
          />

          <Route
            path="/FriendsPage"
            render={() => (
              <FriendsPage
                {...this.props}
                currentUser={this.state}
              ></FriendsPage>
            )}
          />
          <Route
            path="/addOrEditFriends/:friendId/"
            exact
            component={addOrEditFriend}
          ></Route>
          <Route
            path="/JobsPage"
            exact
            render={() => <Jobs {...this.props}></Jobs>}
          ></Route>
          <Route
            path="/addOrEditJobs/:jobId/"
            exact
            component={addOrEditJobs}
          ></Route>
        </Switch> */}
      </div>
    );
  }
}

export default withRouter(App);
