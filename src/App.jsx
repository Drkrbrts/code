import React, { Component } from "react";
import SiteNav from "./SiteNav/SiteNav"
import Jumbo from "./Jumbo/Jumbo"
import Content from "./Content/Content"
import RegisterNav from "./SiteNav/RegisterNav";
import LogInNav from "./SiteNav/LogInNav"
import RegistrationPage from "./Content/RegistrationPage"
import LogInPage from "./Content/LogInPage";
import Footer from "./Footer/Footer"
import "./App.css";
import {BrowserRouter, Route, withRouter} from "react-router-dom"
// import * as userService from "./services/userService"





class App extends Component {
  //state = {}

componentDidMount(){
  console.log("componentDidMount()");
}

onButtonClicked = (e) => {
  e.preventDefault();
  console.log("I was clicked!");

}

//   var payload = {...this.payload}

//   const userData = payload

//   userService.logIn(userData)
//       .then(this.onLogInSuccess)
//       .catch(this.onLogInError)
// }

// onLogInSuccess = (response) => {
//   console.log(response.data, "onLogInSuccess");
// }

// onLogInError = (errResponse) => {
//   console.log({error: errResponse});
// }

  render() {
    return (
      <BrowserRouter>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <Route path="/" exact component={SiteNav}></Route>
            <Route path="/login" exact component={LogInNav}></Route>
            <Route path="/register" exact component={RegisterNav}></Route>
          </div>
        </header>

        <main role="main">
          <div className="container">
          <Route path="/login" exact component={LogInPage}></Route>
          <Route path="/register" exact component={RegistrationPage}></Route>
            <Route path="/" exact component={Jumbo}></Route>
          </div>
          <div className="container">
            {/* <Route path="/" exact component={Content}></Route> */}
            <Route 
              path="/" 
              exact 
              render={() => (
                <Content buttonEvent={this.onButtonClicked}
                ></Content>)}
            ></Route>

            <hr />
          </div>
        </main>

        <footer className="container">
          <Footer></Footer>
        {/* <Route path="/footer" exact component={Footer}></Route> */}
        </footer>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);





