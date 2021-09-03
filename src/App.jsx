import React, { Component } from "react";
import { withRouter, BrowserRouter, Route, Switch} from "react-router-dom";
import Footer from "./components/Footer";
import Friends from "./pages/Friends";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import userService from "./services/users";

import "./App.css";
import WidgetForm from "./components/codingChallenge/WidgetForm";

class App extends Component {
  
  state = { };

  currentUser = () => {
    userService.current()
        .then(this.currentUserSuccess)
        .catch(this.currentUserError)
  }

  displayName = (data) => {
      let updatedName = data;

      this.setState({name: updatedName})
  }

  currentUserSuccess = (response) => {
      userService.userById(response.data.item.id)
          .then(this.getByIdSuccess)
          .catch(this.getByIdError)

      this.displayName(response.data.item.name)
      
  }

  currentUserError = (response) => {
      console.log(response)
  }

  getByIdSuccess = (response) => {
      this.setUser({user: response.data.item})
  }

  getByIdError = (response) => {
      console.log(response)
  }

  componentDidMount() {
      this.currentUser()
  }

  setUser = user => {
    this.setState({user: user})
  }
  render() {
    return (
      <React.Fragment>
        <NavBar  user={this.state.user} setUser={this.setUser} {...this.props} />
        <main role="main">
        <BrowserRouter>
        <Switch>
          <Route path="/register" exact={true} component={Register} />
          <Route path="/login" exact={true} component={() => <Login setUser={this.setUser} />} />
          <Route path="/home" exact={true} component={() => <Home user={this.state.user} name={this.state.name}/>} />
          <Route path="/friends" exact={true} component={() => <Friends user={this.state.user}/>} />
          <Route path="/widget" exact={true} component={WidgetForm} />
        </Switch>
        </BrowserRouter>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
