import React, { Component } from "react";
// import { Route } from "react-router-dom";
// import SiteNav from "./Components/SiteNav";
import { withRouter } from "react-router-dom";
// import Register from "./Components/Register";
// import Login from "./Components/Login";
// import Footer from "./Components/Footer";
// import Home from "./Components/Home";
// import Friends from "./Components/Friends";
// import AddFriend from "./Components/AddFriend";
import Widgets from "./Components/CodingChallenge/Components/Widgets";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Widgets></Widgets>
        {/* <SiteNav></SiteNav>
        <Route path="/register" exact={true} component={Register}></Route>
        <Route path="/login" exact={true} component={Login}></Route>
        <Route path="/home" exact={true} component={Home}></Route>
        <Route path="/friends" exact={true} component={Friends}></Route>
        <Route path="/addFriends" exact={true} component={AddFriend}></Route> */}
        <main role="main"></main>
        <footer className="container">{/* <Footer></Footer> */}</footer>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
