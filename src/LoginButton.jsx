import React from "react"
import {NavLink, Router} from "react-router-dom"

class LoginButton extends React.Component
{
    render()
    {
        return(
            <React.Fragment>
                <NavLink to="/logIn">
                    <button type="button" className="btn btn-outline-light me-2">Login</button>
                </NavLink>
                <NavLink to="/register">
                    <button  type="button" className="btn btn-warning">Sign-up</button>
                </NavLink>
            </React.Fragment>
        )
    }
}

export default LoginButton