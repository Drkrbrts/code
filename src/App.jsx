import React, { Component } from "react";
import SiteNav from "./SiteNav/SiteNav"
import Jumbo from "./Jumbo/Jumbo"
import Content from "./Content/Content"
import RegistrationPage from "./Content/RegistrationPage"
import LogInPage from "./Content/LogInPage";
import UserHomePage from "./Content/UserHomePage";
import UserFriendsPage from "./Content/UserFriendsPage";
import UserAddFriendPage from "./Content/UserAddFriendPage";
import Footer from "./Footer/Footer"
import "./App.css";
import {BrowserRouter, Route, withRouter} from "react-router-dom"


class App extends Component {

  state = {
    currentUser: {},
    isLoggedIn: false
  }

componentDidMount(){
  console.log("componentDidMount() -> App");
}

onButtonClicked = (e) => {
  e.preventDefault();
  console.log("I was clicked!");
}

handleLogIn = (currentUser) => {
  this.setState({
    currentUser: currentUser,
    isLoggedIn: true
  })
}
// creates a copy of App level state: Don't know which is correct?
// this.setState((prevState) => {
//   let currentState = prevState.state
//   currentState = {currentUser:data}
//   currentState.isLoggedIn = true;

//   return {currentState}
// })

handleLogOut = () => {
  this.setState({
    currentUser: {},
    isLoggedIn: false
  })
}

  render() {
    return (
      <BrowserRouter>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <Route 
              path="/" 
              exact={false} 
              render={(props) => (
                <SiteNav
                  {...props}
                  handleLogOut={this.handleLogOut}          
                  currentUser={this.state}
                />
            )}/>
          </div>
        </header>

        <main role="main">
          <div className="container">
          <Route 
            path="/login" 
            exact 
            render={(props) => (
              <LogInPage 
                {...props}
                handleLogIn={this.handleLogIn}
              />
          )}/>
          <Route 
            path="/register" 
            exact 
            render={(props)=>(
              <RegistrationPage 
                {...props}
              />)}
          />
          <Route path="/" exact component={Jumbo}/>
          </div>

          <div className="container">
            
            <Route 
              path="/" 
              exact 
              render={() => (
                <Content buttonEvent={this.onButtonClicked}/>)}
            />
            <Route 
              path="/home" 
              exact
              render={() => (
                <UserHomePage
                  currentUser={this.state}
                />
            )}/>

            <Route
              path="/friends"
              exact
              render={(props) => (
                <UserFriendsPage
                {...props}
                // editFriend={this.handleEditFriend}
                />
            )}/>

            {/* Add Friend Page */}
            <Route
              path="/friends/add"
              exact={true}
              render={(props) => (
                <UserAddFriendPage
                  {...props}
                />
              )}/>

            <Route
              path="/friends/edit/:friendId(\d+)"
              exact={true}
              render={(props) => (
                <UserAddFriendPage
                  {...props}
                />
            )}/>

            <hr />
          </div>
        </main>

        <footer className="container">
          <Footer/>
        </footer>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);





