import React, { Component } from "react";
import { BrowserRouter, withRouter, Route } from "react-router-dom";
import Footer from "../src/components/Footer";
import SiteNav from "../src/components/SiteNav";
import Jumbo from "../src/components/Jumbo";
import Register from "../src/components/Register";
import Login from "../src/components/Login";
import Friends from "../src/components/Friends";
import AddFriend from "../src/components/AddFriend";
import Jobs from "../src/components/Jobs";
import AddJob from "../src/components/AddJob";
import Cars from "../src/components/codingchallenge/Cars";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <SiteNav {...this.props}></SiteNav>
        <main role="main">
          <div className="container">
            <Route path="/" exact={true} component={Login}></Route>
            <Route path="/home" exact={true} component={Jumbo}></Route>
            <Route path="/register" exact={true} component={Register}></Route>
            <Route path="/login" exact={true} component={Login}></Route>
            <Route path="/friends" exact={true} component={Friends}></Route>
            <Route
              path="/friends/addFriend"
              exact={true}
              component={AddFriend}
            ></Route>
            <Route
              path="/AddFriend/:friendId(\d+)"
              exact={true}
              component={AddFriend}
            ></Route>
            <Route path="/jobs" exact={true} component={Jobs}></Route>
            <Route path="/jobs/addJob" exact={true} component={AddJob}></Route>
            <Route
              path="/addJob/:jobId(\d+)"
              exact={true}
              component={AddJob}
            ></Route>
            <Route path="/cars" exact={true} component={Cars}></Route>
          </div>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
