import React, { Component } from "react";
import SiteNav from "./components/SiteNav";
import Cars from "./components/codeChallenge/Cars";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  


  render() {
    return (
      <React.Fragment>
        <SiteNav></SiteNav>
        <Cars></Cars>
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
    );
  }
}

export default App;
