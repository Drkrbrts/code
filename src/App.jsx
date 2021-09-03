import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SiteNav from "./components/SiteNav";
import Register from "./components/Register";
import Login from "./components/Login";
import LoggedIn from "./components/LoggedIn";
import "./App.css";
import LoggedOut from "./components/LoggedOut";
import FriendAdd from "./components/FriendAdd";
import Widget from "./components/codechallenge/Widget";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <SiteNav />
          <div>
            <Route path="/widget" exact={true} component={Widget} />
          </div>
          <div>
            <Route path="/LoggedOut" exact={true} component={LoggedOut} />
          </div>
          <div>
            <Route path="/Register" exact={true} component={Register} />
          </div>
          <Route path="/Login" exact={true} component={Login} />
          <div>
            <Route path="/LoggedIn" exact={true} component={LoggedIn} />
          </div>
          <div>
            <Route path="/FriendAdd" exact={true} component={FriendAdd} />
          </div>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
