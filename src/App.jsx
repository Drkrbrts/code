import React, { Component } from "react";
import Content from "./components/Content";
import Jumbo from "./components/Jumbo";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import * as userService from "./services/userService";
import "rc-pagination/assets/index.css";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import HomePage from "./components/HomePage";
import Assessment from "./components/Assessment";
import AddFriend from "./components/AddFriend";
import Friends from "./components/Friends";
import Cars from "./components/Cars";

import "./App.css";

class App extends Component {
  state = {
    loggedInUser: false,
    currentUser: {
      firstName: "",
    },
  };

  componentDidMount = () => {
    userService
      .currentUser()
      .then(this.onCurrentUserSuccess)
      .catch(this.onCurrentUserError);
  };

  onCurrentUserSuccess = (response) => {
    console.log("currentUsergood", response);
    this.setState({ loggedInUser: true });

    userService
      .getUserById(response.data.item.id)
      .then(this.onGetUserByIdSuccess)
      .catch(this.onGetUserByIdError);
  };

  onCurrentUserError = (err) => {
    console.error("currentUserbad", err);
  };

  onGetUserByIdSuccess = (response) => {
    console.log("UserIdSuccess", response);
    this.setState((prevState) => {
      let currentUser = { ...prevState.currentUser };
      currentUser.firstName = response.data.item.firstName;
      return { currentUser };
    });
  };
  onGetUserByIdError = (err) => {
    console.error("homepageIDbad", err);
  };

  render() {
    const { loggedInUser } = this.state;
    return (
      <BrowserRouter>
        <SiteNav
          isLoggedIn={loggedInUser}
          currentUser={this.state.currentUser}
        />
        <main>
          <Route path="/assessment" exact={true} component={Assessment}></Route>
          <Route path="/jumbo" exact={true} component={Jumbo}></Route>
          <Route path="/content" exact={true} component={Content}></Route>
          <Route path="/signup" exact={true} component={SignUp}></Route>
          <Route path="/login" exact={true} component={LogIn}></Route>
          <Route path="/homepage" exact={true}>
            <HomePage firstNameUser={this.state.currentUser.firstName} />
          </Route>
          <Route path="/friends" exact={true} component={Friends}></Route>
          <Route path="/addfriend" exact={true} component={AddFriend}></Route>
          <Route
            path="/addfriend/:id(\d+)/edit"
            exact={true}
            component={AddFriend}
          ></Route>
          <Route path="/cars" exact={true} component={Cars}></Route>
          <Footer />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
