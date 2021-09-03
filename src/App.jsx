import React from "react";
import {Route,withRouter,Switch} from "react-router-dom"
import RegForm from "./Pages/Registration"
import LogIn from "./Pages/LogIn"
import Home from "./Pages/Home"
import Friends from "./Pages/Friends";
import NavBar from "./components/NavBar";
import Codechallege from "./codeChallege/codechallege";
import EditFriendForm from "./components/EditFriendForm";
import Jobs from "./Pages/Jobs";
import JobForm from "./components/JobForm";
import TechCompany from "./Pages/TechCompanies";
import TechForm from "./components/TechForm";
import Events from "./Pages/Events";

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
              <Route exact={true} path="/Friends/Edit/:id" component={EditFriendForm} />
              <Route exact={true} path="/Jobs" component={Jobs} />
              <Route exact={true} path="/Jobs/Create/:id" component={JobForm} />
              <Route exact={true} path="/Jobs/Create" component={JobForm} />
              <Route exact={true} path="/TechCompanies" component={TechCompany} />
              <Route exact={true} path="/TechCompanies/Edit/:id" component={TechForm} />
              <Route exact={true} path="/TechCompanies/Add" component={TechForm} />
              <Route exact={true} path="/Events" component={Events} />
            </Switch>
          </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
