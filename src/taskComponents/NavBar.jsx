import React from "react"
import * as userService from "../services/userService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CHECKLIST: need to create a logout button and need to display user name after user logs in

class NavBar extends React.Component {


    onHomeClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onHomeClicked was clicked",seconds)
        this.props.history.push("/")
    }
   
    onRegisterClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onRegisterClicked was clicked",seconds)
        this.props.history.push("/Register/")
    }

    onUserClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onRegisterClicked was clicked",seconds)
        //this.props.history.push("/Register/")
        console.log("user",this.props)
    }
/*
    onFriendsClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onHomeClicked was clicked",seconds)
        this.props.history.push("/")    
    }

    onBlogsClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onHomeClicked was clicked",seconds)
        this.props.history.push("/")
    }

    onTechCoClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onHomeClicked was clicked",seconds)
        this.props.history.push("/")    
    }

    onJobsClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onHomeClicked was clicked",seconds)
        this.props.history.push("/")    
    }

    onEventsClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onHomeClicked was clicked",seconds)
        this.props.history.push("/")    
    }

*/

getButton = () => {

    if(this.props.user.loggedIn === false){
  
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
    this.props.user.loggedIn = false;
    this.props.history.push("/")
  }
  
  onLogOutError= (errResponse) => {
    console.log("error",{error:errResponse})
  
    toast.error("Error logging out");
  }

    render() {
         
        let logButton = this.getButton();
        
        console.log("Rendering SiteNav")
        console.log("nav props", this.props.user.loggedIn)
        return (
            <React.Fragment>
                <header className="p-3 bg-dark text-white">
                <div className="">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                        <button
                            onClick={this.onHomeClicked}
                            className="nav-link px-2 text-white link-button">
                            Home
                        </button>
                        </li>
                        <li>
                        <button 
                            className="nav-link px-2 text-white link-button">
                            Friends
                        </button>
                        </li>
                        <li>
                        <button
                            className="nav-link px-2 text-white link-button">
                            Blogs
                        </button>
                        </li>
                        <li>
                        <button
                            className="nav-link px-2 text-white link-button"
                        >
                            Tech Companies
                        </button>
                        </li>
                        <li>
                        <button
                            className="nav-link px-2 text-white link-button"
                        >
                            Jobs
                        </button>
                        </li>
                        <li>
                        <button
                            className="nav-link px-2 text-white link-button"
                        >
                            Events
                        </button>
                        </li>
 
                    </ul>

                    <div className="text-end">

                    {logButton}

                        <button
                            onClick={this.onRegisterClicked}
                            type="button" 
                            className="btn btn-warning">
                            Register
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={this.onUserClicked}
                            className="nav-link px-2 fw-bold text-primary link-button">
                            <strong className="user">{this.props.user.name}</strong>
                        </button>
                    </div>
                    </div>
                    
                </div>
                </header>
            </React.Fragment>
           
        );
    }    
};

export default NavBar;