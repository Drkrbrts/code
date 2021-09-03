import React, { Component } from "react";
import 'rc-pagination/assets/index.css'
import {BrowserRouter, Route} from "react-router-dom"
import Jumbo from "./Jumbo"
import Footer from "./Footer"
import Content from "./Content"
import SiteNav from "./SiteNav"
import { withRouter } from "react-router-dom";
import "./App.css";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
        <header className="p-3 bg-dark text-white">
          <SiteNav/>
        </header>

        <main role="main">
            <div className="container-fluid py-5">
            <Route path='/Jumbo' exact={true} component={Jumbo}/>
          <Route path='/Content' exact={true} component={Content}/>
          </div>
        </main>

        <footer className="container">
          <Footer></Footer>
        </footer>
      
      </BrowserRouter>
    );
    
  }
}

export default withRouter(App);
