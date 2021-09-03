import React, { Component } from "react";
import "./App.css";
import { withRouter, Route } from "react-router-dom";
import NavBar from "./taskComponents/NavBar"
import Login from "./taskComponents/Login";
import Register from "./taskComponents/Register";
import * as userService from "./services/userService";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./taskComponents/Home";
import Friends from "./taskComponents/Friends";
import AddFriend from "./taskComponents/AddFriend";
import FriendsNavBar from "./taskComponents/FriendsNavBar";
import TechCo from "./taskComponents/jobs/TechCo";
import FriendSearch from "./taskComponents/FriendSearch";
import Cars from "./components/codechallenge/Cars";

//import Widget from "./components/codechallenge/Widget"
import EditFriend from "./taskComponents/EditFriend";
class App extends Component {

  state = {
    currentUser:{
    name: "User"
    ,id: ""
    ,tenantId: "UO228K6HGDD"
    ,loggedIn: ""
    }
  }


componentDidMount() {
  console.log("componentDidMount");

  userService.currentUser()
    .then(this.onGetUserSuccess)
    .catch(this.onGetUserError);

    this.setState((prevState) => {  
      let currentUser = { ...prevState.currentUser };
  
      return { currentUser };
    });
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

getLoginData = (data) => {
  const status = data;


  userService.currentUser()
    .then(this.onGetUserSuccess)
    .catch(this.onGetUserError);

  this.setState((prevState) => {  
    let currentUser = { ...prevState.currentUser };
    currentUser.loggedIn = status;

    return { currentUser };
  });
}

getLogOutData = (data) => {
  const status = data;

  this.setState((prevState) => {  
    let currentUser = { ...prevState.currentUser };
    currentUser.loggedIn = status;
    currentUser.name = "User";
    currentUser.id = "";

    return { currentUser };
  });
}

  shareData = (data) => {
    console.log("share data executing")

    this.setState((prevState) => {  
      let editFriendForm = { ...prevState.editFriendForm };
      editFriendForm = data;
  
      return { editFriendForm };
    });

  }

  friendSearchProps = (data) =>{
    console.log("App search Props",data)
    this.setState((prevState) => {  
      let friendSearchData = { ...prevState.friendSearchData };
      friendSearchData = data;
  
      return { friendSearchData };
    });
  }

    render() {    

        return(
        <React.Fragment>
            <section className="vh-100 container-bg">
                
            <div>  
                    <NavBar
                    loginData={this.getLogOutData}
                    user={this.state.currentUser} 
                    {...this.props}>
                    </NavBar>

                   
            </div>
            <div>       
                    
                    <Route 
                    path={["/Friends", "/Friends/FriendSearch"]} 
                    exact={true}   
                    render={(routeProps) => (
                    <FriendsNavBar
                    searchProps = {this.friendSearchProps}
                    shareFriendData={this.shareData}
                    registerData={this.state}
                    {...routeProps}
                    ></FriendsNavBar>
                    )}
                    ></Route>

                    <Route 
                    path="/Friends" 
                    exact={true}   
                    render={(routeProps) => (
                    <Friends
                    shareFriendData={this.shareData}
                    registerData={this.state}
                    {...routeProps}
                    ></Friends>
                    )}
                    ></Route>
                    
                    <Route 
                    path="/Friends/AddFriend" 
                    exact={true}   
                    render={(routeProps) => (
                    <AddFriend
                    registerData={this.state}
                    {...routeProps}
                    ></AddFriend>
                    )}
                    ></Route>

                    <Route 
                    path="/Friends/Edit" 
                    exact={false}   
                    render={(routeProps) => (
                    <EditFriend
                    editFormData={this.state.editFriendForm}
                    {...routeProps}
                    ></EditFriend>
                    )}
                    ></Route>
                   
                    <Route 
                    path="/TechCo" 
                    exact={true}   
                    render={(routeProps) => (
                    <TechCo
                    editFormData={this.state.editFriendForm}
                    {...routeProps}
                    ></TechCo>
                    )}
                    ></Route>

                    <Route path="/" exact={true} component={Cars}></Route>

               <div> 
                          
               </div>    

                    <Route 
                    path="/Login" 
                    exact={true}   
                    render={(routeProps) => (
                    <Login
                    loginData={this.getLoginData}
                    {...routeProps}
                    ></Login>
                    )}
                    ></Route>

                    <Route 
                    path="/Home" 
                    exact={true}   
                    render={(routeProps) => (
                    <Home
                    userData={this.state.currentUser.name}
                    {...routeProps}
                    ></Home>
                    )}
                    ></Route>

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
