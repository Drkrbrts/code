import React, { Component } from "react";
import 'rc-pagination/assets/index.css'
import "./App.css";
import Footer from "./Components/Footer"
import Content from "./Components/Content"
import Jumbo from "./Components/Jumbo"
import Header from "./Components/Header"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as userService from "./services/userService";


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

}

  render() {
    return (
      <Router>
        <React.Fragment>
          <div>
            <Header>
            </Header>
          </div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/Content">Go to Content</Link>
          </div>
          <div>
            <Link to="/Jumbo">Go to Jumbo</Link>
          </div>
          <div>
            <Route path="/" exact={true}></Route>
            <Route path="/Jumbo" exact={true} component={Jumbo}></Route>
            <Route path="/Content" exact={true} component={Content}></Route>

          </div>


          <div>
            <Footer></Footer>
          </div>

        </React.Fragment>
      </Router>

    );
  }
}

export default App;
