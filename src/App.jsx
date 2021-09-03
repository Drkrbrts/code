import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Register from "./Register";
import HomePage from "./HomePage";
import Friends from "./Friends";
import Login from "./Login";
import SiteNav from "./SiteNav";
import FriendForm from "./FriendForm";
import Jobs from "./Jobs";
import JobForm from "./JobForm";
import Events from "./Events";
import ReactFormChallenge from "./codechallenge/ReactFormChallenge";
// import Jumbo from "./Jumbo";
// import Content from "./Content";
// import Footer from "./Footer";
import "./App.css";
//import { Button } from "bootstrap";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <SiteNav></SiteNav>
          <Route exact={true} path="/home" component={HomePage}></Route>
          <Route exact={true} path="/login" component={Login}></Route>
          <Route exact={true} path="/register" component={Register}></Route>
          <Route exact={true} path="/friends" component={Friends}></Route>
          <Route
            exact={true}
            path="/friends/new"
            component={FriendForm}
          ></Route>
          <Route
            exact={true}
            path="/friends/:id/edit"
            component={FriendForm}
          ></Route>
          <Route exact={true} path="/jobs" component={Jobs}></Route>
          <Route exact={true} path="/jobs/new" component={JobForm}></Route>
          <Route exact={true} path="/jobs/:id/edit" component={JobForm}></Route>
          <Route exact={true} path="/events" component={Events}></Route>
          <Route
            exact={true}
            path="/widgetform"
            component={ReactFormChallenge}
          ></Route>
          <main role="main">
            {/* <Jumbo></Jumbo>
            <Content></Content>
            <div className="row m-3">
              <Buttons {...this.props}></Buttons>  */}
            {/* </div> */}
          </main>
          {/* <Footer></Footer> */}
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
