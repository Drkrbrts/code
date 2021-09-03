import React, { Component } from "react";
import { FooterTemplate, NavigationBar , HeroSection, UserLogin, UserList} from "./index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

import "./App.css";

class App extends Component {
  render() {
    return (
    
      <Router>
        <NavigationBar {...this.props} />
        <Switch>
        <Route path="/login" exact = {true} component ={UserLogin} />
        </Switch>
        <HeroSection/>
        <UserList></UserList>
        <FooterTemplate/>
      </Router>


    );
  }
}

export default withRouter(App);
