import React, { Component } from "react";
import NavHeader from "./components/header";
import Footer from "./components/footer";
import Jumbo from "./components/jumbotron";
import Content from "./components/content";
import Forms from "./register/registerForm";
import LogIn from "./components/login";
import { Route } from "react-router-dom";
import "./App.css";
import FormWidget from "./components/codechallenge";
import HomePage from "./components/HomePage";
import Friends from "./friendsComponents/Friends";
import FriendForm from "./friendsComponents/FriendForm";
import Cars from "./carComponents/Cars";

import * as userService from "./services/userService";

class App extends Component {
  state = {
    isLoggedIn: false,

    currentUser: {},
  };

  componentDidMount() {
    console.log("comp mount");
    userService
      .currentUser()
      .then(this.currentUserSuccess)
      .catch(this.currentUserError);
  }

  currentUserSuccess = (response) => {
    console.log(response);
  };

  currentUserError = (errReponse) => {
    console.log(errReponse);
  };

  render() {
    return (
      <React.Fragment>
        <NavHeader {...this.props}></NavHeader>

        <Route path="/HomePage" component={HomePage} exact={true}>
          <HomePage user={this.state.currentUser.firstName}></HomePage>
        </Route>

        <Route path="/friends" component={Friends} exact={true}></Route>

        <Route path="/friendform" component={FriendForm} exact={true}></Route>

        <Route path="/widget" component={FormWidget} exact={true}></Route>

        <Route path="/cars" component={Cars} exact={true}></Route>

        <Route path="/login" component={LogIn} exact={true}></Route>

        <Route path="/jumbotron" component={Jumbo} exact={true}></Route>

        <Route path="/content" component={Content} exact={true}></Route>

        <Route path="/registerForm" component={Forms} exact={true}></Route>

        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
