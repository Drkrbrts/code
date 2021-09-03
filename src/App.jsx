import React, { Component } from "react";
import SiteNav from './components/siteNav.jsx'
import Jumbo from './components/jumbo'
import Content from './components/content.jsx'
import Footer from './components/footer'
import {BrowserRouter, Route} from 'react-router-dom'
import * as userService from './components/auth/userService'
import "./App.css";


class App extends Component {
  componentDidMount(){
    console.log('componentDidMount is firing...')
      const data = {
        "email": "carlosjimenez170@yahoo.com",
        "password": "Naruto!2",
        "tenantId": "U026KJPV4BY"
      }
      userService.logIn(data)
      .then(onLoginSuccess)
      .catch(onLoginError)
    
  
    function onLoginSuccess(response){
      console.log(response)
    }
    function onLoginError(response){
      console.log({error: response})
    }
  }
  render() {
    return (
      <BrowserRouter>
      
        <SiteNav/>
        <main>
         <Route path="/jumbo" exact component={Jumbo}></Route>
          <Route path="/content" exact={true} component={Content}></Route>
        </main>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
