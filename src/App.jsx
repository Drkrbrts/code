import React, { Component } from "react";
import {withRouter} from "react-router-dom"
import {BrowserRouter, Route} from "react-router-dom"
import "./App.css";
// import NavBar from "./navBar/NavBar";
// import Login from "./login/Login";
// import Register from "./login/Register";
// import HomePage from "./homePage/HomePage";
// import FriendsPage from "./friendsPage/FriendsPage";
// import AddFriendsPage from "./friendsPage/AddFriendsPage";
import Cars from "./codeChallenge/Cars";


class App extends Component {

  
  render() {
    return (
      <BrowserRouter>
        {/* <div className="header">
          <NavBar {...this.props}/>
        </div>
        <div>
          <Route path="/registration/" component={Register}></Route>
        </div>
        <div>
          <Route path="/login/" component={Login}></Route>
        </div>
        <div>
          <Route path="/home/" component={HomePage}></Route>
        </div>
        <div>
          <Route path="/friends/" component={FriendsPage}></Route>
        </div> 
        <div>
          <Route path="/addfriends/" component={AddFriendsPage}></Route>
        </div>      */}
        <Cars />
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
