import React, { Component } from "react";
import SiteNav from './components/siteNav.jsx'
import Jumbo from './components/jumbo'
import Content from './components/content.jsx'
import Footer from './components/footer'
import {BrowserRouter, Route} from 'react-router-dom'
import * as userService from './services/userService'
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
      <React.Fragment>
        <main>
        <Route path='/' exact={false} component={SiteNav}></Route>
        <Route path="/" exact={true} component={Jumbo}></Route>
          <Route path="/" exact={true} component={Content}></Route>
        </main>
        <Route path='/' exact={true} component={Footer}></Route>
      </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
