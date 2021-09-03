import React, { Component } from "react";
import "./App.css";

// My imports
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Footer from "./components/Footer";
import SiteNav from "./components/SiteNav";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>

        <div>
        <NavLink to="/Footer">Render Footer</NavLink>
        </div>
        <div>
        <NavLink to="/SiteNav">  Render SiteNav</NavLink>
        </div>
        <div>
        <NavLink to="/Jumbo">  Render Jumbo</NavLink>
        </div>
        <div>
        <NavLink to="/Content">  Render Content</NavLink>
        </div>
        <Route path="/SiteNav" exact={true} component={SiteNav}></Route>
        <Route path="/Jumbo" exact={true} component={Jumbo}></Route>
        <Route path="/Content" exact={true} component={Content}></Route>
        <Route path="/Footer" exact={true} component={Footer}></Route>
        {/* <SiteNav></SiteNav> */}
        
        {/* <Jumbo></Jumbo> */}

        {/* <Content></Content> */}

        {/* <Footer></Footer> */}

      </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
