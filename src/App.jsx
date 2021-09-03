import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/Login";
import Welcome from "./components/Welcome";
import Jumbo from "./components/basicComponents/Jumbo";
import Content from "./components/basicComponents/Content";
import Footer from "./components/basicComponents/Footer";
import Friends from "./components/friends/Friends";
import FriendsInfo from "./components/friends/FriendsInfo";
import AddFriend from "./components/friends/AddFriend";
import JobDisplay from "./components/jobs/JobDisplay";
import CreateJob from "./components/jobs/CreateJob";
import Cars from "./components/codechallenge/Cars"

// import { Route } from "react-router-dom";

class App extends Component {
  componentDidUpdate(prevProps) {
    let previousPath = prevProps.location.pathname;
    let currentPath = this.props.location.pathname;
    console.log("App", { previousPath, currentPath });
  }

  render() {
    console.log("rendering App");
    return (
      <BrowserRouter>
        <Route path="/register/" exact={true} component={RegisterPage}></Route>
        <Route path="/login/" exact={false} component={LoginPage}></Route>
        <Route path="/jumbo/" exact={true} component={Jumbo}></Route>
        <Route path="/content/" exact={true} component={Content}></Route>
        <Route path="/home/:id(\d+)" exact={false} component={Welcome}></Route>
        <Route
          path="/friends/:id(\d+)"
          exact={true}
          component={Friends}
        ></Route>
        <Route
          path="/friends/edit/:id(\d+)"
          exact={true}
          component={FriendsInfo}
        ></Route>
        <Route path="/friends/add" exact={true} component={AddFriend}></Route>
        <Route path="/jobs" exact={true} component={JobDisplay}></Route>
        <Route path="/jobs/create" exact={true} component={CreateJob}></Route>
        {/* <Cars></Cars> */}
        <Route path="/cars" exact={false} component={Cars}></Route>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
