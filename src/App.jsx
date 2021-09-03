import React, { Component } from "react";
import Footer from "./Components/Footer";
import Jumbo from "./Components/Jumbo";
// import SiteNav from "./Components/Sitenav";
import Content from "./Components/Content";
import { BrowserRouter, Route } from "react-router-dom";
// import * as userService from "./services/userService";
import Register from "./Components/Register";
import "rc-pagination/assets/index.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import FriendsEdit from "./Components/FriendsEdit";
import FriendsHome from "./Components/FriendsHome";
import Widget from "./Components/codechallenge/Widget";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <SiteNav></SiteNav> */}
        <React.Fragment>
          <Route path="/jumbo" exact component={Jumbo}></Route>
          <Route path="/content" exact component={Content}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/friendsedit" exact component={FriendsEdit}></Route>
          <Route path="/friendshome" exact component={FriendsHome}></Route>
          <Route path="/widget" exact component={Widget}></Route>

          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
