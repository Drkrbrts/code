import React, { Component } from "react";
import { Route } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import { withRouter } from "react-router-dom";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriends";
import EditFriend from "./components/EditFriend";
import ChallengeWidget from "./components/codechallenge/CodingChallenge";
import Jobs from "./components/jobs/Jobs";
import JobsCreate from "./components/jobs/JobsCreate";
import Cars from "./components/codechallenge/Cars";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteNav {...this.props} />
        <Route path="/home">
          <Homepage {...this.props} />
        </Route>
        <Route path="/register">
          <Register {...this.props} />
        </Route>
        <Route path="/login">
          <Login {...this.props} />
        </Route>
        <Route path="/friends/addfriend">
          <AddFriend {...this.props} />
        </Route>
        <Route path="/friends/editfriend">
          <EditFriend {...this.props} />
        </Route>
        <Route path="/friends">
          <Friends {...this.props} />
        </Route>
        <Route path="/jobs/jobscreate">
          <JobsCreate {...this.props} />
        </Route>
        <Route path="/jobs">
          <Jobs {...this.props} />
        </Route>
        <Route path="/codingchallenge">
          <ChallengeWidget />
        </Route>
        <Route path="/cars">
          <Cars {...this.props} />
        </Route>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
