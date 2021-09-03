import React, { Component } from "react";
import "./App.css";

// My imports
import * as userService from "./services/userService";
import { withRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Product from "./components/Product";
import SiteNav from "./components/SiteNav";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content";

class App extends Component {

  state = {
    currentUser: {
      email: "Random@Hotmail.com"
      ,password: "12345678"
      ,tenantId: "123"
    }
  };

  componentDidMount() {
    console.log("componentDidMount");


    this.setState((prevState, props) => {             // !!!MAKE ALL THE CHANGES TO STATE IN ONE CALL!!!
      let currentUser = { ...prevState.currentUser };
      currentUser.email = "Thomas_McGarvey@Hotmail.com";
      currentUser.password = "tHomaS1234##";
      currentUser.tenantId = "UO228K6HGDD";

      userService.logIn(currentUser)
      .then(this.onActionSuccess)
      .catch(this.onActionError);

      return { currentUser }; // return new things that need to be changed
    });

  }

  onActionSuccess = (response) => {
      console.log("login success:",response)
  }
  
  onActionError= (errResponse) => {
      console.log("login error:",{error: errResponse})
  }


  render() {
    console.log("Rendering App")
    console.log("Current User:", this.state.currentUser)
    return (

      <React.Fragment>
        <div>
        <SiteNav {...this.props}></SiteNav> {/* ""...this.props" passes the props to SiteNav */}
        </div>
        <div>
        <Route path="/Jumbo" exact={true} component={Jumbo}></Route>
        <Route path="/Content" exact={true} component={Content}></Route>
        <Route path="/Footer" exact={true} component={Footer}></Route>
        <Route path="/Product/:id(\d+)" exact={true} component={Product}></Route>  
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
