import React, { Component } from "react";
import 'rc-pagination/assets/index.css'
import "./App.css";
import Header from "./Components/Header"
import LoginForm from "./Components/LoginForm"
import Form from "./Components/Form"
import Footer from "./Components/Footer"
import Content from "./Components/Content"
import Jumbo from "./Components/Jumbo"
import Widget from "./Components/codechallenge/Widget"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as userService from "./services/userService";
import * as service from "./Components/codechallenge/service";

class App extends Component {
componentDidMount(){
  console.log("component did mount")
  const data = {
    "firstName": "Test",
    "lastName": "Person",
    "email": "testemail@yahoo.com",
    "password": "PassWord1!",
    "passwordConfirm": "PassWord1!",
    "avatarUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fau.whales.org%2Fwp-content%2Fuploads%2Fsites%2F3%2F2018%2F06%2Fhumpback-whale-vanessa-mignon.jpg&f=1&nofb=1",
    "tenantId": "123456789"
  }
userService.logIn(data).then(this.onActionSuccess).catch(this.onActionError)
service.widgetInfo(data).then(this.onActionSuccess).catch(this.onActionError)

}
  render() {
    return (
      <Router>
        <React.Fragment>
          <div>
            <Header></Header>
          </div>
          <div>
            <Route path="/" exact={true}></Route>
            <Route path="/Form" exact={true} component={Form}></Route>
            <Route path="/Jumbo" exact={true} component={Jumbo}></Route>
            <Route path="/Content" exact={true} component={Content}></Route>
            <Route path="/LoginForm" exact={true} component={LoginForm}></Route>
          </div>
          <Route path="/codechallenge/Widget" exact={true} component={Widget}></Route>
          <div>
            <Footer></Footer>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
export default App; 