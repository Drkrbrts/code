import React, { Component } from "react";
import {BrowserRouter,Route} from "react-router-dom"
import Footer from "./components/Footer";
import Content from "./components/Content";
import Jumbo from "./components/Jumbo";
import SiteNav from "./components/SiteNav";
import * as userServices from "./services/userServices.js"

import "./App.css";

class App extends Component {

  componentDidMount()
  {
    const data ={
      email: "sabio@sabio.la",
      password: "Sabiopassword1!",
      tenantId: "bootcamp1"
     };
     
      userServices.logIn(data)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  }

  onActionSuccess =(response)=>
  {
    console.log(response);
  }
  onActionError =(err)=>
  {
    console.log(err);
  }

  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
      <SiteNav/> 
        <main role="main">
          <div>
            <Route path="/Jumbo" exact={true} component={Jumbo}/>
          </div>
          <div>
            <Route path="/Content" exact={true} component={Content}/>
          </div>
        </main>
      <Footer/>
      </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
