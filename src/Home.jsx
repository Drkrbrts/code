import React from "react";
import * as usersService from "./services/usersService";
import { withRouter, NavLink } from "react-router-dom"

class Home extends React.Component{

    state={
        name: ""
    }
    componentDidMount()
    {
        usersService.currentUser()
            .then(this.onCurrentUserSuccess)
            .catch(this.onCurrentUserError);
    }

    onCurrentUserSuccess =(response)=>{
        console.log(response, "onCurrentUserSuccess");


        this.setState(()=>{
            let newState= {}

            newState.name = response.name
            console.log(newState);

            return newState;
        })
    }

    onCurrentUserError =(error)=>{
        console.log(error, "onCurrentUserError");
        this.props.history.push("/login")
    }

    onLogOutClicked =()=>
    {
        console.log("logout clicked")
        this.props.history.push("/login")

        usersService.logOut()
            .then(this.onLogOutSuccess)
            .catch(this.onLogOutError);

    }

    onLogOutSuccess =(response)=>
    {
        console.log(response, "onLogOutSuccess");
    }

    onLogOutError =(error)=>
    {
        console.warn(error, "onLogOutError");
    }



    render()
    {
        return (
            
            <React.Fragment>
                <div>
                    <h1 className="px-3 py-5">Welcome {this.state.name}!</h1>
                </div>
                <div>
                    <ul>
                        <li><NavLink to="/friends">See Friends</NavLink></li>
                        <li><NavLink to="/blogs">Go to Blogs</NavLink></li>
                        <li><NavLink to="/tech-companies">See Tech companies</NavLink></li>
                        <li><NavLink to="/jobs">See Jobs</NavLink></li>
                        <li><NavLink to="/events">See Events</NavLink></li>
                        <li><NavLink to="register">Register a new account</NavLink></li>
                    </ul>
                </div>
                <div>
                    <button 
                        style={{backgroundColor: "yellow", borderRadius: "10px"}}
                        className="mx-3 my-5"
                        onClick={this.onLogOutClicked}
                        >Logout
                    </button>
                </div>
            </React.Fragment>
        )         
    }
}

export default withRouter(Home);