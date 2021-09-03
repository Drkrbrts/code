import React from "react";
import Footer from "./componentize/Footer"
import Content from "./componentize/Content"
import Jumbo from "./componentize/Jumbo"
import SiteNav from "./componentize/SiteNav"
import Register from "./starter/Register"
import Login from "./starter/Login"
import Home from "./componentize/Home"

import * as userService from "./services/userService"

import {BrowserRouter, Route} from "react-router-dom"

import 'rc-pagination/assets/index.css'
import "./App.css";

import CodeChallenge from "./codeChallenge/CodeChallenge"

class App extends React.Component {  
  
state = {
    isAuthenticated: false,
   
    currentUser:{
    firstName: "", 
    lastName: "", 
    email: "",
    avatarUrl: ""
}}

componentDidMount()
{
    console.log('mounted!')
    // this.onCurrentUser()
    this.onCurrentUser();    
    // console.log(this.state)


}

onCurrentUser = () => 
{
    userService.currentUser()
    .then(this.onCurrentSuccess)
    .catch(this.onCurrentUserIdError)
}

onCurrentSuccess = (response) => {

    console.log(response)
    let id = response.data.item.id;

    this.onCurrentUserById(id)
    this.setState({isAuthenticated : true})

    // userService.onCurrentUserById(id).then(this.onCurrentUserIdSuccess).catch(this.onCurrentUserIdError)
    // userService.userById(response.data.item.id)
    // .then(this.onCurrentUserIdSuccess)
    // .catch(this.onCurrentUserError)
}

onCurrentError = (response) => 
{
    console.warn(response)
    this.setState({isAuthenticated:false})

}

onCurrentUserById = (id) =>
{
    console.log(id)
    userService.getById(id).then(this.onCurrentUserIdSuccess).catch(this.onCurrentUserIdError)
}

  onCurrentUserIdSuccess = (response) =>
  { 
      // console.log(response)
      // console.log(response.data.item.name)

      console.log(response.data.item) 

      this.setState({currentUser:response.data.item})

    //   var newUser = {...this.state.currentUser}
    //   newUser.firstName = response.data.item.firstName
    //   this.setState({currentUser: newUser})
    // this.setState((prevState) =>
    //   {
    //     let currentUser = {...prevState.currentUser}
    //     let newData = response.data.item
    //     currentUser.firstName = newData.firstName            
    //     currentUser.lastName = newData.lastName
    //     currentUser.email = newData.email
    //     return {currentUser}});
    // console.log(this.state)
    // this.setState({tempData})
    
   }
           
    onCurrentUserIdError = (response) =>
  {
    console.log(response)    
    this.setState({isAuthenticated: false})
  }

  render() {
    // console.log(this.state)
    const {isAuthenticated } = this.state;

    return (
      <BrowserRouter>

        <SiteNav
        // isLoggedIn={isAuthenticated}
        isLoggedIn = {isAuthenticated}
        currentUser={this.state.currentUser}
        // {...this.props}
        />                   
        
        <main>     
        <Route path="/jumbo" exact={true} component={Jumbo}></Route>

        <Route path="/content" exact={true} component={Content}></Route>

        <Route path="/login" exact={true} component={Login}></Route>

        <Route path="/register" exact={true} component={Register}></Route>

        {/* <Home user={this.state.currentUser.firstName} /> */}

        {/* <Route path="/home" exact={true} <Home /></main> </Route> */}

        <Route path="/home" exact={true}><Home user={this.state.currentUser.firstName}/></Route>

        <Route path="/widget" exact={true} component={CodeChallenge}></Route>

        </main>
        {/* <span style={{padding: '10px'}}>{this.state.name}</span> */}

        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;


// parent to childern -> use this.props.
// parent needs to know which properties aka friends={this.state.currentUser} -> friend is a prop component of disney
// disney -> child component of app



  // componentDidMount() {

  //   console.log("componentDidMount")
    
  //       userService.logIn()
  //   .then(this.onLogInSuccess)
  //   .catch(this.onLogInError);
  //   }

  //   onLogInSuccess = (response) => {
  //       console.log("Login Successful", response)
  //   }

  //   onLogInError= (errResponse) => {
  //       console.log("Login Fail", errResponse)
  //   }

  // state = {loggedInUser: {
  //   userName: this.props.userName,
  //   email: this.props.email},
  //   friend: Andy
  // }

  // constructor(props)
  // {
  //   super(props)
  //   this.state={data: "Data from parent"}
  // }
  // 


// ajax endpoitn call user id -> 
// set this = state {}
// state = {
// userCurrent ={ ajax call -> }
// }
