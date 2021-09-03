import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavigationBar from "./SiteNav";
// import Pagination from 'rc-pagination';
import "rc-pagination/assets/index.css";
import "./App.css";

import Registry from "./StarterTask/UserStart/Register";
import Home from "./StarterTask/UserStart/Home";
import LogIn from "./StarterTask/UserStart/Login";

import FriendsDisplay from "./StarterTask/Friends/Friends";
import FriendsAdd from "./StarterTask/Friends/FriendAdd";
import FriendEdit from "./StarterTask/Friends/FriendEdit";

import JobsDisplay from "./StarterTask/Jobs/Jobs";
import JobsAddEdit from "./StarterTask/Jobs/JobsAddEdit";

import TechDisplay from "./StarterTask/Tech/Tech";
import TechAdd from "./StarterTask/Tech/TechAdd";

import EventsDisplay from "./StarterTask/Events/Events";

import EntityEndpoint from "./codeChallenge/CCForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route component={NavigationBar}></Route>
          <Route path="/register" component={Registry}></Route>
          <Route path="/login" component={LogIn}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/friends" exact component={FriendsDisplay}></Route>
          <Route path="/friends/new" exact component={FriendsAdd}></Route>
          <Route path="/friends/:id/edit" exact component={FriendEdit}></Route>
          <Route path="/jobs" exact component={JobsDisplay}></Route>
          <Route path="/jobs/:id/edit" exact component={JobsAddEdit}></Route>
          <Route path="/jobs/new" exact component={JobsAddEdit}></Route>
          <Route path="/techCompanies" component={TechDisplay}></Route>
          <Route path="/techCompaniesAdd" component={TechAdd}></Route>
          <Route path="/events" component={EventsDisplay}></Route>
          <Route path="/codeChallenge" component={EntityEndpoint}></Route>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
