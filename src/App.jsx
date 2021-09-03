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
import TechCo from "./components/TechCo";
import TechCoForm from "./components/TechCoForm";
import Events from "./components/Events";
import FormCodingChallenge from "./components/FormCodingChallenge";
import Cars from "./codeChallenge/Cars";
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
        <Route path="/" exact component={HomePage} />
        <Route path="/friends" exact component={Friends} />
        <Route path="/friendform/:friendId" exact component={FriendForm} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/jobform/" exact component={JobForm} />
        <Route path="/jobform/:jobId" exact component={JobForm} />
        <Route path="/techco" exact component={TechCo} />
        <Route path="/techcoform" exact component={TechCoForm} />
        <Route path="/techcoform/:techCoId" exact component={TechCoForm} />
        <Route path="/events" exact component={Events} />
        <Route path="/cars" exact component={Cars} />
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
