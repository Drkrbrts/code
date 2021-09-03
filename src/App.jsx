import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import SiteNav from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Friends from "./components/Friends";
import FriendForm from "./components/FriendForm";
import Jobs from "./components/Jobs";
import JobForm from "./components/JobForm";
import FormCodingChallenge from "./components/FormCodingChallenge";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteNav />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/homepage" exact component={HomePage} />
        <Route path="/friends" exact component={Friends} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/friendform/:friendId" exact component={FriendForm} />
        <Route path="/jobform/:jobId" component={JobForm} />
        <Route path="/jobform/:jobId" exact component={JobForm} />
        <Route
          path="/formcodingchallenge"
          exact
          component={FormCodingChallenge}
        />
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
