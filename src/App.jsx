import React, { Component } from "react";
import SiteNav from "./SiteNav"
import Jumbo from "./Home"
import Content from "./Content"
import Footer from "./Footer"
import Home from "./Home"
import { withRouter } from "react-router-dom";
import {BrowserRouter as Router,
  Route,
  NavLink} from "react-router-dom"
import 'rc-pagination/assets/index.css'
import Register from "./Register"
import LogIn from "./LogIn"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import * as userService from "./services/userService"
import LoginCoutrol from "./LoginControl";
import AddFriend from "./friends/AddFriend"
import Friends from "./friends/Friends"
import Presidents from "./practice/Presidents"
import Cars from "./code to code challenge/Cars"
//import Clock from "react-clock"
//import "react-clock/dist/Clock.css"

import "./App.css";
import UpdateFriend from "./friends/UpdateFriend";

class App extends Component {
  state = {
    isLoggedIn: false,
    currentUser: {firstName: "", lastName: "", email: "", avatarUrl: ""}
  }
  componentDidMount()
  {
      userService.getCurrent()
          .then(this.onGetCurrentSuccess)
          .catch(this.onGetCurrentError)
  }
  // onGetUserById = (id) =>
  // {
  //   userService.getUserById(id).then(this.onGetUserByIdSuccess).catch(this.onGetUserByIdError)
  // }

  onGetCurrentSuccess = (response) =>
  {
    console.log(response)
    let id = response.data.item.id;
    userService.getUserById(id).then(this.onGetUserByIdSuccess).catch(this.onGetUserByIdError)
    // this.onGetUserById(id);
    this.setState({isLoggedIn: true});
  }
  onGetCurrentError = (response) =>
  {
    console.log("Get current user fail")
    this.setState({isLoggedIn: false});
  }

  onGetUserByIdSuccess = (response) =>
  {
    console.log("Get User by id success")
    this.setState({currentUser: response.data.item})
  }
  onGetUserByIdError = (response) =>
  {
    console.log("Get User By Id fail")
  }

  render() {
    
    const {isLoggedIn} = this.state;
    return (
      <Router>
        <div>
          <SiteNav 
              isLoggedIn = {isLoggedIn}
              currentUser = {this.state.currentUser}
              {...this.props}/>
          {/* <Home name = {this.state.currentUser.firstName} isLoggedIn = {isLoggedIn}/>  */}
        </div>
        <div>
          {/* <Friends></Friends> */}
          {/*   */}
          
          {/* <Friends/> */}
          
        </div>

        <main role="main">
          <div className="container">
          </div>
          <Route path="/home" exact component={Home}/>
          <Route path="/logIn" exact component={LogIn}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/content" exact component={Content}/>
          <Route path="/addFriend" exact component={AddFriend}/>
          <Route path="/updateFriend" exact component={UpdateFriend}/>
          <Route path="/friends" exact component={Friends}/>
          <Route path="/friends/:oneId(\d+)/edit"/>
          
          
          
          <div className="container">
            <Cars/>
          </div>
        </main>
      </Router>
    );
  }
}

export default withRouter(App);
