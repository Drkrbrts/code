import React from "react"
import {NavLink, Router} from "react-router-dom"
import * as userService from "./services/userService"

class LogoutButton extends React.Component
{
    
    render()
    {
        return (
            
            <NavLink>
                <button type="button" className="btn btn-outline-light me-2">Logout</button>
            </NavLink>
            
        )
    }
}

export default LogoutButton
