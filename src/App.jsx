import React, { Component } from "react";
import SiteNav from "./SiteNav";
import Jumbo from "./Jumbo";
import Content from "./Content";
import Footer from "./Footer";
import Register from "./Register";
import LogIn from "./LogIn";
import Home from "./Home";
import Friends from "./Friends";
import FriendsView from "./FriendsView";
import "./App.css";
import "./st.css";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Product from "./CodeChallenge/Product";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteNav></SiteNav>
        <main role="main">
          <Route path="/content" exact={true} component={Content}></Route>
          <Route path="/jumbo" exact={true} component={Jumbo}></Route>
          <Route path="/register" exact={true} component={Register}></Route>
          <Route path="/login" exact={true} component={LogIn}></Route>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/friends/new" exact={true} component={Friends}></Route>
          <Route path="/friends" exact={true} component={FriendsView}></Route>
          <Route
            path="/friends/:id/edit"
            exact={true}
            component={Friends}
          ></Route>
          <Route path="/product" exact={true} component={Product}></Route>
        </main>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
