import React from "react";
import * as userService from "../services/userService";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class SiteNav extends React.Component {
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
        console.log("logout was clicked", response);
        this.props.history.push("/login");
        toast.success("Logout Successful", {
            position: "top-center"
        });
    }

    logoutError = (error) =>
    {
        console.error(error);
    }

    onHomeWasClicked = (e) =>
    {
        console.log("home was clicked");
        this.props.history.push("/Home");
    }
    onJumboWasClicked = (e) =>
    {
        console.log("Jumbo was clicked");
        this.props.history.push("/Jumbo");
    }
    onContentWasClicked = (e) =>
    {
        console.log("Content was clicked");
        this.props.history.push("/Content");
    }
    onWidgetWasClicked = (e) =>
    {
        console.log("Widget was clicked");
        this.props.history.push("/Widget");
    }
    onFriendsFormWasClicked = (e) =>
    {
        console.log("FriendsForm was clicked");
        this.props.history.push("/FriendsForm");
    }
    onFriendsWasClicked = (e) =>
    {
        console.log("Friends was clicked");
        this.props.history.push("/Friends");
    }
    onCarsWasClicked = (e) =>
    {
        console.log("Cars was clicked");
        this.props.history.push("/cars");
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
                            {/* <NavLink to="/Home"> */}
                                <button
                                    href="#"
                                    className="nav-link px-2 text-secondary link-button"  
                                    onClick={this.onHomeWasClicked}
                                >
                                    Home
                                </button>
                            {/* </NavLink> */}
                        </li>
                        <li>
                            {/* <NavLink to="/Jumbo">      */}
                                <button 
                                    className="nav-link px-2 text-white link-button"
                                    onClick={this.onJumboWasClicked}
                                >
                                Jumbo  
                                </button>
                            {/* </NavLink> */}
                        </li>
                        <li>
                            {/* <NavLink to="/Content"> */}
                                <button
                                    href="#"
                                    className="nav-link px-2 text-white link-button"
                                    onClick={this.onContentWasClicked}
                                >
                                    Content
                                </button>
                            {/* </NavLink> */}
                        </li>
                        <li>
                            {/* <NavLink to="/CodeChallenge"> */}
                                {/* <button
                                    href="#"
                                    className="nav-link px-2 text-white link-button"
                                    onClick={this.onWidgetWasClicked}
                                >
                                    Widget
                                </button> */}
                            {/* </NavLink> */}
                        </li>
                        <li>
                            {/* <NavLink to="/FriendsForm"> */}
                                <button
                                    href="#"
                                    className="nav-link px-2 text-white link-button"
                                    onClick={this.onFriendsFormWasClicked}
                                >
                                    FriendsForm
                                </button>
                            {/* </NavLink> */}
                        </li>
                        <li>
                                <button
                                    href="#"
                                    className="nav-link px-2 text-white link-button"
                                    onClick={this.onCarsWasClicked}
                                >
                                    Cars
                                </button>
                        </li>
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

                        <NavLink to="/Login">
                            <button 
                                type="button" 
                                className="btn btn-outline-light me-2">
                            Login
                            </button>
                        </NavLink>

                            <button 
                                type="button" 
                                className="btn btn-outline-light me-2" 
                                onClick={this.onLogoutClicked}>
                            Log Out
                            </button>

                        <NavLink to="/Register">
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