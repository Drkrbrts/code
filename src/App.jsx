import React, { Component } from "react";
import SiteNav from "./header/SiteNav";
import Jumbo from "./title/Jumbo";
import Content from "./body/Content";
import Footer from "./foot/Footer";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { logIn } from "./services/userService";
import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    this.setState(logIn);
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavLink to="/sitenav">SiteNav</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink to="/jumbo">Jumbo</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink to="/content">Content</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink to="/footer">Footer</NavLink>
          <div>
            <Route path="/sitenav" exact={true} component={SiteNav}></Route>
            <Route path="/jumbo" exact={true} component={Jumbo}></Route>
            <Route path="/content" exact={true} component={Content}></Route>
            <Route path="/footer" exact={true} component={Footer}></Route>
            {/* <SiteNav></SiteNav> */}
          </div>
          <main role="main">
            <div>{/* <Jumbo></Jumbo> */}</div>
            <div>{/* <Content></Content> */}</div>
          </main>
          <div>{/* <Footer></Footer> */}</div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
