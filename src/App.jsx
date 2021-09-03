import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Jumbo from "./components/jumbo";
import Content from "./components/content";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Nav";
import Product from "./Codechallenge/products";
import Registration from "./components/registration";
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
        
          <Navbar /> 
         
          
         
          
          

          <main role="main">
            <Switch>
            <Route path="/product" exact component={Product} /> 
            <Route path="/registration" exact component={Registration} /> 
            <Route path="/jumbo" exact component={Jumbo} /> 
            <Route path="/content" exact component={Content} />
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Content} /> 
             
            </Switch>
          </main>
         <Footer />
          {/* <Footer /> */}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;


