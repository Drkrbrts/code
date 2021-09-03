import React from "react";
import * as usersService from "./services/usersService";
import { withRouter } from "react-router-dom"

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
                <h1 className="px-5 py-5">Welcome {this.state.name}!</h1>
                <button 
                    style={{backgroundColor: "yellow", borderRadius: "10px"}}
                    className="mx-5"
                    onClick={this.onLogOutClicked}
                    >Logout</button>
            </React.Fragment>
        )         
    }
}

export default withRouter(Home);