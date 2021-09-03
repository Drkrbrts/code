import React, { Component } from "react";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";
import SiteNav from "./components/SiteNav";
import Registration from "./components/Registration";
import Home from "./components/Home"; 
import FriendForm from "./components/FriendForm";
import Friends from "./components/Friends"; 
import Friend from "./components/Friend"; 



import Product from "./components/Product"; 



import { BrowserRouter, Route } from "react-router-dom"; 
import { withRouter } from "react-router-dom";

import "./App.css";

class App extends Component {

  // componentDidMount() {
  //   console.log("componentDidMount", "component mounted ok");
  // }


  render() {
    console.log("rendering app");
    return (
      <BrowserRouter>
        <SiteNav {...this.props}></SiteNav>


        <Route path="/product" exact={true} component={Product}></Route>


              
        <Route path="/login" exact={true} component={LogIn}></Route>
        <Route path="/home" exact={true} component={Home}></Route>
        <Route path="/registration" exact={true} component={Registration}></Route>
        
        <Route path="/friendform" exact={true} component={FriendForm}></Route>
        <Route path="/friends" exact={true} component={Friends}></Route>
        <Route path="/friend" exact={true} component={Friend}></Route>



          <Footer></Footer>

          </BrowserRouter>
    );
  }
}

export default withRouter(App);


//Questions: 
//When should {...this.props} be added, what is the function?
