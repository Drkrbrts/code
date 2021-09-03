import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Footer from "./components/Footer";
import SiteNav from "./components/SiteNav";
import Content from "./components/Content";
import Jumbo from "./components/Jumbo";
import Registration from "./components/Registration";
import {BrowserRouter, Route} from "react-router-dom";
import * as userService from "./services/userService";
import Toastr from "./Toastr";
import Widget from "./components/codechallenge/Widget";


// import 'rc-pagination/assets/index.css'
// import {BrowserRouter, Route, Navlink} from "react-router-dom";   
/*take out navlink because we are setting the components to separate pages
to see the pages, we just type in /jumbo or /content to the url*/



class App extends Component {

  // state = {
  //   formData: { fName: ""
  //              , lName: ""
  //              , email: "" 
  //              , password: ""
  //              , passwordConf: ""
  //              , avatarUrl: ""}
  // };

  
  // onFormFieldChanged = (e) => {
  //   let currentTarget = e.currentTarget;
  //   let newValue = currentTarget.value;
  //   console.log({newValue, currentTarget});
  // };
 
  // onChange= (e) => {
  //   console.log(e)
  // }
       


  
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
          <Toastr></Toastr>
          <SiteNav/>
            <div>
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
  