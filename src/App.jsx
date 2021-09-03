import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SiteNav from "./components/SiteNav";
import Register from "./components/Register";
import Login from "./components/Login";
import LoggedIn from "./components/LoggedIn";
import LoggedOut from "./components/LoggedOut";
import FriendAdd from "./components/Friends/FriendAdd";
import Widget from "./components/codechallenge/Widget";
import Friends from "./components/Friends/Friends";
import Cars from "./components/codechallenge/Cars";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <SiteNav />
          <Route path="/cars" exact={true} component={Cars} />
          <Route path="/widget" exact={true} component={Widget} />

          <Route path="/LoggedOut" exact={true} component={LoggedOut} />

          <Route path="/Register" exact={true} component={Register} />

          <Route path="/Login" exact={true} component={Login} />

          <Route path="/LoggedIn" exact={true} component={LoggedIn} />

          <Route path="/Friend/new" exact={true} component={FriendAdd} />

          <Route
            path="/Friend/:friendId/edit"
            exact={true}
            component={FriendAdd}
          />

          <Route path="/Friends" exact={true} component={Friends} />

          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
