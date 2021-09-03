import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Footer from "./components/Footer";
// import SiteNav from "./components/SiteNav";
import Content from "./components/Content";
import Jumbo from "./components/Jumbo";
import Registration from "./components/Registration";
import {BrowserRouter, Route} from "react-router-dom";
import * as userService from "./services/userService";
// import Widget from "./components/codechallenge/Widget";
import Widget from "./components/Widget";
import HomePageNav from "./components/HomePageNav";
// import HomePage from "./components/HomePage";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import Cars from "./components/codechallenge/Cars";



class App extends Component {
  
  componentDidMount(){
    console.log("componentDidMount");
    console.log(this.state)
    const payload ={ email: "kh4nhcodes@gmail.com", password: "Password1234!", tenantId:"U025RDS34CC"};
    userService.logIn(payload)
    .then(this.onActionSuccess)
    .catch(this.onActionError)
    }
    onActionSuccess = (response) => {
      console.log("success")
    }
    onActionError = (errResponse) => {
      console.log("error")
    }



    render() {
      return (
        <React.Fragment>
          <BrowserRouter>
          <HomePageNav />
            <div>
              <Route path="/cars" exact={true} component={Cars}></Route>
              <Route path="/addfriend" exact={true} component={AddFriend}></Route>
              <Route path="/friends" exact={true} component={Friends}></Route>
              <Route path="/login" exact={true} component={Login}></Route>
              <Route path="/registration" exact={true} component={Registration}></Route>
              <Route path="/jumbo" exact={true} component={Jumbo}></Route>
              <Route path="/content" exact={true} component={Content}></Route>
              <Route path="/widget" exact={true} component={Widget}></Route>
            </div>
            <br></br>
            <Footer></Footer>
          </BrowserRouter>
        </React.Fragment>
      );
    }
  }
  export default App;
  