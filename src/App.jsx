import React, { Component } from "react";
import SiteNav from "./components/SiteNav";
//import Jumbo from "./components/Jumbo";
//import Content from "./Content";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { withRouter } from "react-router-dom";
import Home from "./components/Home";
import FriendsForm from "./components/friends/FriendsForm";
import Friends from "./components/friends/Friends";
import Widget from "./components/codechallenge/Widgets";
import Cars from "./components/cars/Cars";

class App extends Component {
  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;

    console.log("App", { currentPath, previousPath });
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <SiteNav {...this.props}></SiteNav>
          <main role="main">
            <div>
              {/* <NavLink to="/register">Show Register</NavLink> */}
              {/* <NavLink to="/widget">Show Widget</NavLink> */}
            </div>
            <div> {/* <NavLink to="/login">Show Login</NavLink> */}</div>
            <div className="row m-3">
              <Route path="/register" exact={true} component={Register}></Route>
            </div>
            <div>
              <Route path="/login" exact={true} component={Login}></Route>
              <Route path="/home" exact={true} component={Home}></Route>
              <Route
                path="/friendsForm/:id"
                exact={false}
                component={FriendsForm}
              ></Route>
              <Route
                path="/friendsForm"
                component={FriendsForm}
                exact={true}
              ></Route>
              <Route path="/cars" exact={true} component={Cars}></Route>
              <Route path="/widget" exact={true} component={Widget}></Route>
              <Route path="/friends" exact={false} component={Friends}></Route>
            </div>
            <div>{/* <Jumbo></Jumbo> */}</div>
          </main>
          <Footer></Footer>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
