import React, { Component } from "react";

import "./App.css";
import Footer from "./components/Footer";
// import SiteNav from "./components/SiteNav";
import Content from "./components/Content";
import Jumbo from "./components/Jumbo";
import {BrowserRouter, Route} from "react-router-dom";
import * as userService from "./services/userService";

import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Friends from "./components/Friends";

import {withRouter} from "react-router-dom";
import UserForm from "./components/codechallenge/UserForm";
// import SingleFriend from "./components/SingleFriend";
import FriendForm from "./components/FriendForm";
import Cars from "./components/codechallenge/Cars";
// import Birds from "./components/Birds";
// import Cars from "./components/codechallenge/Cars";



//codeChallenge
// import UserForm from "./components/codechallenge/UserForm";



// import {BrowserRouter, Route, Navlink} from "react-router-dom";   
/*take out navlink because we are setting the components to separate pages
to see the pages, we just type in /jumbo or /content to the url*/

class App extends Component {


componentDidMount(){
  console.log("componentDidMount");
  // console.log(this.state)

  // const payload ={email:"user@google.com", password:"password"};
  const payload ={email:"kim@gmail.com", password:"Password1!", tenantId:"U025G714W4V"};
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
        <HomePage/>
        {/* <Birds/> */}
        {/* <SiteNav/> */}

          {/* <div>
            <NavLink to="/jumbo">Go to Jumbo</NavLink>
          </div>
          <div>  
            <NavLink to="/content">Go to Content</NavLink>
          </div> */}

          <div>
            <Route path="/jumbo" exact={true} component={Jumbo}></Route>
            <Route path="/content" exact={true} component={Content}></Route>
          </div>

          <div>
            <Route path="/registerpage" exact={true} component={RegisterPage}></Route>
            <Route path="/loginpage" exact={true} component={LoginPage}></Route>
            {/* <Route path="/homepage" exact={true} component={HomePage}></Route> */}
            <Route path="/friends" exact={true} component={Friends}></Route>
            <Route path="/userform" exact={true} component={UserForm}></Route>
            {/* <Route path="/singlefriend" exact={true} component={SingleFriend}></Route> */}
            <Route path="/friendform" exact={true} component={FriendForm}></Route>
            <Route path="/cars" exact={true} component={Cars}></Route>

            
          </div>

          
        <Footer></Footer>

        </BrowserRouter>

      </React.Fragment>
    );
  }
}

// export default App;

export default withRouter(App);