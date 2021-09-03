import React from "react";
import {Route,withRouter,Switch} from "react-router-dom"
import RegForm from "./Pages/Registration"
import LogIn from "./Pages/LogIn"
import Home from "./Pages/Home"
import Friends from "./Pages/Friends";
import NavBar from "./components/NavBar";
import Codechallege from "./Pages/codechallege";

import "./App.css";


class App extends React.Component{
  

  render(){
    return (
      <React.Fragment>
          <NavBar {...this.props}></NavBar>
          <div className="box">

            <Switch>
              <Route exact={true} path="/Friends" component={Friends} />
              <Route exact={true} path="/Home" component={Home} />
              <Route exact={true} path="/Register" component={RegForm}/>
              <Route exact={true} path="/LogIn" component={LogIn} />
              <Route exact={true} path="/Codechallege" component={Codechallege} />
            </Switch>
          </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
