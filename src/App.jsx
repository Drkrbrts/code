import React, { Component } from "react";

import "./App.css";
import Footer from "./components/Footer";
import SiteNav from "./components/SiteNav";
import Content from "./components/Content";
import Jumbo from "./components/Jumbo";
import {BrowserRouter, Route} from "react-router-dom";

// import {BrowserRouter, Route, Navlink} from "react-router-dom";   
/*take out navlink because we are setting the components to separate pages
to see the pages, we just type in /jumbo or /content to the url*/

class App extends Component {

componentDidMount(){
  
  console.log("componentDidMount");
  console.log(this.state)
  
}

  render() {
    return (

      <React.Fragment>
        <BrowserRouter>
        <SiteNav/>

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
          
          <Footer></Footer>

        </BrowserRouter>

      </React.Fragment>
    );
  }
}

export default App;
