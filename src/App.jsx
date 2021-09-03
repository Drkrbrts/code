import React, { Component } from "react";
import {BrowserRouter, Route, NavLink} from "react-router-dom"
import SiteNav from "./components/SiteNav";
import Product from "./components/codeChallenge/Product";
import Footer from "./components/Footer";
import "./App.css";


class App extends Component {
  


  render() {
    return (
    <BrowserRouter>
        <React.Fragment>
          <SiteNav></SiteNav>
          <NavLink to="/products">Products</NavLink>
          <div>
            <Route path="/products" exact={true} component={Product}></Route>
          </div>
          <Footer></Footer>
          <main role="main">
            <div className="container">
              <div className="row">
                <div className="col-md-4 p-5">
                
                </div>
              </div>

              <hr />
            </div>
          </main>  
        </React.Fragment>
    </BrowserRouter>
    );
  }
}

export default App;
