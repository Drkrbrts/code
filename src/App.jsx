import React, { Component } from "react";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Jumbo from "./components/Jumbo";
import SiteNav from "./components/SiteNav";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import FriendsForm from "./components/FriendsForm";
import Friends from "./components/Friends";

import * as userService from "./services/userService";
import { BrowserRouter, Route, withRouter } from "react-router-dom";

import "rc-pagination/assets/index.css";
import "./App.css";

import CodeChallenge from "./codeChallenge/CodeChallenge";
import CodingChallenge2 from "./codeChallenge/CodingChallenge2";

import SingleFriend from "./components/SingleFriend";

class App extends Component {
  state = {
    isAuthenticated: false,

    currentUser: {
      firstName: "",
      lastName: "",
      email: "",
      avatarUrl: "",
    },
  };

  componentDidMount() {
    this.onCurrentUser();
  }

  onCurrentUser = () => {
    userService
      .currentUser()
      .then(this.onCurrentSuccess)
      .catch(this.onCurrentUserIdError);
  };

  onCurrentSuccess = (response) => {
    console.log(response);
    let id = response.data.item.id;
    this.onCurrentUserById(id);
    this.setState({ isAuthenticated: true });

    // userService.onCurrentUserById(id).then(this.onCurrentUserIdSuccess).catch(this.onCurrentUserIdError)
    // userService.userById(response.data.item.id)
    // .then(this.onCurrentUserIdSuccess)
    // .catch(this.onCurrentUserError)
  };

  onCurrentError = (response) => {
    console.warn(response);
    // this.setState({isAuthenticated:false})
  };

  onCurrentUserById = (id) => {
    console.log(id);
    userService
      .getById(id)
      .then(this.onCurrentUserIdSuccess)
      .catch(this.onCurrentUserIdError);
  };

  onCurrentUserIdSuccess = (response) => {
    // console.log(response)
    // console.log(response.data.item.name)

    console.log(response.data.item);

    this.setState({ currentUser: response.data.item });

    // when we are only updating one property value ->

    //   var newUser = {...this.state.currentUser}
    //   newUser.firstName = response.data.item.firstName
    //   this.setState({currentUser: newUser})

    // this.setState((prevState) =>
    //   {
    //     let currentUser = {...prevState.currentUser}
    //     let newData = response.data.item
    //     currentUser.firstName = newData.firstName
    //     currentUser.lastName = newData.lastName
    //     currentUser.email = newData.email
    //     return {currentUser}});
    // console.log(this.state)
    // this.setState({tempData})
  };

  onCurrentUserIdError = (response) => {
    console.log(response);
    // this.setState({ isAuthenticated: false });
  };

  render() {
    // console.log(this.state)
    const { isAuthenticated } = this.state;

    return (
      <BrowserRouter>
        <SiteNav
          // isLoggedIn={isAuthenticated}
          isLoggedIn={isAuthenticated}
          currentUser={this.state.currentUser}
          // {...this.props}
        />
        <main>
          <Route path="/jumbo" exact={true} component={Jumbo}></Route>
          <Route path="/content" exact={true} component={Content}></Route>
          <Route path="/login" exact={true} component={Login}></Route>
          <Route path="/register" exact={true} component={Register}></Route>
          <Route path="/friends" exact={true} component={Friends}></Route>

          <Route path="/home" exact={true}>
            <Home user={this.state.currentUser.firstName}></Home>
          </Route>

          <Route
            path="/friendsform"
            exact={true}
            component={FriendsForm}
          ></Route>

          <Route
            path="/friendsform/:id(\d+)/edit"
            exact={true}
            component={FriendsForm}
          ></Route>

          <Route path="/widget" exact={true} component={CodeChallenge}></Route>
          <Route path="/cars" exact component={CodingChallenge2}></Route>
        </main>

        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);

// parent to childern -> use this.props.
// parent needs to know which properties aka friends={this.state.currentUser} -> friend is a prop component of disney
// disney -> child component of app

// componentDidMount() {

//   console.log("componentDidMount")

//       userService.logIn()
//   .then(this.onLogInSuccess)
//   .catch(this.onLogInError);
//   }

//   onLogInSuccess = (response) => {
//       console.log("Login Successful", response)
//   }

//   onLogInError= (errResponse) => {
//       console.log("Login Fail", errResponse)
//   }

// state = {loggedInUser: {
//   userName: this.props.userName,
//   email: this.props.email},
//   friend: Andy
// }

// constructor(props)
// {
//   super(props)
//   this.state={data: "Data from parent"}
// }
//

// ajax endpoitn call user id ->
// set this = state {}
// state = {
// userCurrent ={ ajax call -> }
// }
