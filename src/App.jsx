import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import { withRouter } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content";
import Footer from './components/Footer';
import { Route } from "react-router-dom";


class App extends Component {
 
  componentDidUpdate(prevProps){
    let previousPath = prevProps.location.pathname;
    let currentPath = this.props.location.pathname;
    console.log("App", {previousPath, currentPath})
}


  render(){
    console.log('rendering App')
    return (
        <React.Fragment>  
       <div className="App">
       <header className="App-header">
        <SiteNav{...this.props}></SiteNav>
    
        <img src={logo} className="App-logo" alt="logo" />
         </header>
       
        <main role="main">
          <div className="container">
            <div className="row m-3">
              <Jumbo{...this.props}></Jumbo>   
            </div>
            <div className="row m-3">
            <Content{...this.props}></Content>    
            </div>
            
           
          </div>
          </main>
         <Footer {...this.props}></Footer>
        </div>
         <div className="row m-3">
            <Route path="/siteNav/:id(\d+)" exact={true} component={SiteNav}></Route>
            <Route path="/jumbo/:id(\d+)" exact={false} component={Jumbo}></Route>
            <Route path="/content/:id(\d+)" exact={true} component={Content}></Route>
            <Route path="/footer/:id(\d+)" exact={true} component={Footer}></Route>
            </div>
        
        </React.Fragment>
    )
  }
}
// export default App;
export default withRouter(App);