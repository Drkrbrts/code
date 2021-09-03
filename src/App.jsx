import React from "react";
//import {BrowserRouter, Route, NavLink} from "react-router-dom";
import { withRouter } from "react-router";
//import { Route, NavLink } from "react-router-dom";
import SiteNav from "./pages/SiteNav";
import Footer from "./pages/Footer";
import Jumbo from "./pages/Jumbo";
import Content from "./pages/Content";
//import Register from "./pages/Register";

//import Register from "./pages/Register";
import "rc-pagination/assets/index.css";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
//import Home from "./pages/Thehome";
import Sitenavhome from "./pages/Sitenavhome";
import Sitenavform from "./pages/Sitenavform";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Addfriends from "./pages/Addfriends";
import Updatefriend from "./pages/Updatefriend";

import Blogs from "./pages/Blogs";
import Tech from "./pages/Tech";
import Jobs from "./pages/Jobs";
import UpdateJob from "./pages/UpdateJob";
import AddJob from "./pages/AddJob";
import Events from "./pages/Events";
import Cars from "./codechallenge/Cars";
import AddTech from "./pages/AddTech";
import UpdateTech from "./pages/UpdateTech";
import AddEvent from "./pages/AddEvent";
import UpdateEvent from "./pages/UpdateEvent";
import MapDemo from "./pages/MapDemo";
import Schools from "./codechallenge/Schools";
import UpdateSchool from "./codechallenge/UpdateSchool";
import AddSchool from "./codechallenge/AddSchool";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Home">
            <Sitenavhome />
            <Home />
          </Route>

          <Route path="/Events">
            <Sitenavhome />
            <Events />
          </Route>

          <Route path="/MapDemo">
            <Sitenavhome />
            <MapDemo />
          </Route>

          <Route path="/Cars">
            <Cars />
          </Route>

          <Route path="/Schools">
            <Schools />
          </Route>

          <Route path="/Friends">
            <Sitenavhome />
            <Friends />
          </Route>

          <Route path="/Addfriends">
            <Sitenavhome />
            <Addfriends />
          </Route>

          <Route path="/AddEvent">
            <Sitenavhome />
            <AddEvent />
          </Route>

          <Route path="/UpdateEvent/:slug">
            <Sitenavhome />
            <UpdateEvent />
          </Route>

          <Route path="/UpdateSchool/:id">
            <Sitenavhome />
            <UpdateSchool />
          </Route>

          <Route path="/AddSchool">
            <Sitenavhome />
            <AddSchool />
          </Route>

          <Route path="/Updatefriend/:id">
            <Sitenavhome />
            <Updatefriend />
          </Route>

          <Route path="/Blogs">
            <Sitenavhome />
            <Blogs />
          </Route>

          <Route path="/Tech">
            <Sitenavhome />
            <Tech />
          </Route>

          <Route path="/AddTech">
            <Sitenavhome />
            <AddTech />
          </Route>

          <Route path="/UpdateTech/:id">
            <Sitenavhome />
            <UpdateTech />
          </Route>

          <Route exact path="/Jobs">
            <Sitenavhome />
            <Jobs />
          </Route>

          <Route path="/AddJob">
            <Sitenavhome />
            <AddJob />
          </Route>

          <Route path="/UpdateJob/:id">
            <Sitenavhome />
            <UpdateJob />
          </Route>

          <Route path="/register">
            <Sitenavform />
            <Register />
          </Route>

          <Route path="/login">
            <Sitenavform />
            <Login />
          </Route>

          <Route path="/">
            <SiteNav />
            <main role="main">
              <Jumbo {...this.props} />
              <Content {...this.props} />
            </main>
          </Route>
        </Switch>
        <Footer {...this.props} />
      </BrowserRouter>
    );
  }
}

export default App;
