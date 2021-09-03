import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

import SiteNav from "./Containers/SiteNav";
import Home from "./Containers/Home";
import Friends from "./Containers/Friends";
import Cars from "./Containers/Cars";
import AddFriends from "./Containers/AddFriends";

// import Entity from "./codechallenge/Entity";
import * as userService from "./services/userService";

import Register from "./Tasks/Register";
import Loginmenu from "./Tasks/Loginmenu";

import "./App.css";
import { CarouselIndicators, CarouselItem } from "reactstrap";

class App extends Component {
  state = {
    currentUser: { firstName: "" },
  };

  componentDidMount() {
    console.log("componentDidMount");
    userService.current().then(this.onGetSuccess).catch(this.onGetError);
  }

  onGetSuccess = (response) => {
    console.log(response.data.item.name);
    this.setState((prevState) => {
      let currentUser = { ...prevState.currentUser };
      let newData = response.data.item;
      currentUser.firstName = newData.name;
      // currentUser.lastName = newData.lastName
      // currentUser.email = newData.email
      console.log({ currentUser });
      return { currentUser };
    });

    //this.setState({ currentUser: response.data.item.name });
  };
  onGetError = (response) => {
    console.log("error");
  };

  render() {
    return (
      <BrowserRouter>
        <SiteNav {...this.props}></SiteNav>

        <Route path="/register" exact={true} component={Register}></Route>

        <Route path="/loginmenu" exact={true} component={Loginmenu}></Route>

        <Route path="/cars" exact={true} component={Cars}></Route>

        <Route path="/home" exact={true}>
          <Home name={this.state.currentUser.firstName} />
        </Route>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
// <Route path="/friends" exact={true} component={Friends}></Route>
// <Route path="/addFriends" exact={true} component={AddFriends}></Route>
