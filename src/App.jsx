import React, { Component } from "react";
import "./App.css";
import { withRouter, Route } from "react-router-dom";
import NavBar from "./taskComponents/NavBar"
import Login from "./taskComponents/Login";
import Register from "./taskComponents/Register";
import * as userService from "./services/userService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {

    state = {
        currentUser:{
        name: "User"
        ,id: ""
        ,tenantId: "UO228K6HGDD"
        ,loggedIn: ""
        }
    }
// component did mount to get user information
componentDidMount() {
  console.log("componentDidMount");

    userService.currentUser()
    .then(this.onGetUserSuccess)
    .catch(this.onGetUserError);
}

onGetUserSuccess = (response) => {
  console.log("User logged in:",response)

  this.setState((prevState) => {  
    let userLogged = response.data.item;
    let currentUser = { ...prevState.currentUser };
    currentUser.name = userLogged.name;
    currentUser.id = userLogged.id;
    currentUser.tenantId = userLogged.tenantId;
    currentUser.loggedIn = true;

    return { currentUser };
  });
}

onGetUserError= (errResponse) => {
  console.log("No user logged in:",{error: errResponse})

  this.setState((prevState) => {  
    let currentUser = { ...prevState.currentUser };
    currentUser.loggedIn = false;

    return { currentUser };
  });
}


getButton = () => {

  if(this.state.currentUser.loggedIn === false){

  return (<button 
      type="button" 
      className="btn btn-outline-light me-2"
      onClick={this.onLoginButtonClicked}>
      Login
  </button>);
  }
  else{
  return (<button 
      type="button" 
      className="btn btn-outline-light me-2"
      onClick={this.onLogOutButtonClicked}>
      Logout
  </button>);
  }
}

onLoginButtonClicked = (e) => {
  let seconds = new Date().getSeconds()
  console.log("onLoginButtonClicked was clicked",seconds)
  this.props.history.push("/Login")
}

onLogOutButtonClicked = (e) => {
  let seconds = new Date().getSeconds()
  console.log("onLogOutButtonClicked was clicked",seconds)

  userService.logOut()
  .then(this.onLogOutSuccess)
  .catch(this.onLogOutError);
}

onLogOutSuccess = (response) => {
  console.log("login success:",response)
  toast.success("You have logged out successfully!");
  this.props.history.push("/")
}

onLogOutError= (errResponse) => {
  console.log("error",{error:errResponse})

  toast.error("Error logging out");
}

// then pass the props to NavBar
    render() {
        console.log("App rendering")      

        return(
        <React.Fragment>
            <section className="vh-100 container-bg">
                
            <div>
                    <NavBar
                    logBttn={this.getButton()}
                    user={this.state.currentUser} 
                    {...this.props}> {/* ""...this.props" passes the props to SiteNav */}
                    </NavBar> 
            </div>
            <div>
                    <Route path="/Login" exact={true} component={Login}></Route>
                    <Route 
                    path="/Register" 
                    exact={true}   
                    render={(routeProps) => (
                    <Register
                    registerData={this.state}
                    {...routeProps}
                    ></Register>
                    )}
                    ></Route>
            </div>
        
        </section>
        </React.Fragment>
        )
    }
}

export default withRouter(App);
