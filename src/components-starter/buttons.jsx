import React from "react";
import { logOutUser } from "../services/userService";



class LoginButton extends React.Component
{

    render()
    {
        return (
            <button type="button" className="btn btn-outline-light me-2">
                Login
            </button>
        )
    }
}

class LogoutButton extends React.Component
{

    onLogOutSuccess = (response) =>
    {
        console.log(response);
        console.log("you are now logged out")
    }

    onLogOutFail = (response) =>
    {
        console.log(response);
        console.log("logout failed")
    }

    onLogoutButtonClicked = () =>
        logOutUser()
            .then(this.onLogOutSuccess)
            .catch(this.onLogOutFail);


    render()
    {
        return (
            <button type="button" className="btn btn-outline-light me-2 btn-logout" onClick={this.onLogoutButtonClicked}>
                Logout
            </button>
        )
    }
}




export { LoginButton, LogoutButton };