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
import Thelogin from "./pages/Thelogin";
//import Home from "./pages/Thehome";
import Sitenavhome from "./pages/Sitenavhome";
import Sitenavform from "./pages/Sitenavform";
import Thehome from "./pages/Thehome";
import Friends from "./pages/Friends";
import Blogs from "./pages/Blogs";
import Tech from "./pages/Tech";
import Jobs from "./pages/Jobs";
import Events from "./pages/Events";
import Addfriends from "./pages/Addfriends";
import Addauthor from "./codechallenge/Addauthor";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/thehome">
            <Sitenavhome />
            <Thehome />
          </Route>

          <Route path="/Addauthor">
            <Sitenavhome />
            <Addauthor />
          </Route>

          <Route path="/Friends">
            <Sitenavhome />
            <Friends />
          </Route>

          <Route path="/Blogs">
            <Sitenavhome />
            <Blogs />
          </Route>

          <Route path="/Tech">
            <Sitenavhome />
            <Tech />
          </Route>

          <Route exact path="/Jobs">
            <Sitenavhome />
            <Jobs />
          </Route>

          <Route path="/Events">
            <Sitenavhome />
            <Events />
          </Route>

          <Route path="/AddFriends">
            <Sitenavhome />
            <Addfriends />
          </Route>

          <Route path="/register">
            <Sitenavform />
            <Register />
          </Route>
          <Route path="/thelogin">
            <Sitenavform />
            <Thelogin />
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
