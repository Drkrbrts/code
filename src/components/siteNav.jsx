import React from "react";
import * as userService from "../services/userService";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class SiteNav extends React.Component
{
    onLogoutClicked = (e) => 
    {
        e.preventDefault();
        e.stopPropagation();

        userService
            .logout()
            .then(this.logoutSuccess)
            .catch(this.logoutError);
    }

    logoutSuccess = (response) =>
    {
        console.log("logout was clicked");
        this.props.history.push("/login");
        toast.success("Logout Successful", {
            position: "top-center"
        });
    }

    logoutError = (error) =>
    {
        console.error(error);
    }


    render(){
        return (
            <React.Fragment>
                <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                    >
                        <img
                        src="https://pw.sabio.la/images/Sabio.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Sabio"
                        />
                    </a>
        
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <NavLink to="/home">
                                <button
                                    href="#"
                                    className="nav-link px-2 text-secondary link-button"  
                                >
                                    Home
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/jumbo">     
                                <button className="nav-link px-2 text-white link-button">
                                Jumbo  
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/content">
                                <button
                                    href="#"
                                    className="nav-link px-2 text-white link-button"
                                >
                                    Content
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/codechallenge">
                                <button
                                    href="#"
                                    className="nav-link px-2 text-white link-button"
                                >
                                    Widget
                                </button>
                            </NavLink>
                        </li>
                        {/* <li>
                        <button
                            href="#"
                            className="nav-link px-2 text-white link-button"
                        >
                            About
                        </button>
                        </li> */}
                    </ul>
        
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input
                        type="search"
                        className="form-control form-control-dark"
                        placeholder="Search..."
                        aria-label="Search"
                        />
                    </form>
        
                    <div className="text-end">

                        <NavLink to="/login">
                            <button type="button" className="btn btn-outline-light me-2">
                            Login
                            </button>
                        </NavLink>

                        <NavLink to="/logout">
                            <button type="button" className="btn btn-outline-light me-2" onClick={this.onLogoutClicked}>
                            Log Out
                            </button>
                        </NavLink>

                        <NavLink to="/register">
                            <button type="button" className="btn btn-warning">
                            Register
                            </button>
                        </NavLink>

                    </div>
                    </div>
                </div>
                </header>
            </React.Fragment>
        );
    }
}

export default withRouter(SiteNav);