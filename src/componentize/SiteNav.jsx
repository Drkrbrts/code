import React from "react";
import * as userService from "../services/userService";
import {NavLink} from "react-router-dom"
import Avatar from 'react-avatar';
// import { NavDropdown } from "react-bootstrap"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from 'react-bootstrap/Button';

import {withRouter} from 'react-router-dom'


class SiteNavMessage extends React.Component {

    onLogOutClicked = () =>
    {
        userService.getLogOut()
        .then(this.onLogOutSuccess)
        .catch(this.onLogOutError)
    }

    onLogOutSuccess = (response) =>
    {
        console.log("logout successful", response)
        this.props.history.push("/login")
        toast.success('🦄 logout Success!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          
    }


    onLogOutError = (response) =>
    {
        console.warn("logout error", response)
    }
        

    
    render() {     
    
        return <React.Fragment>
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
                                <NavLink to="/jumbo"><button
                                    href="#"
                                    className="nav-link px-2 text-secondary link-button">
                                    Home
                                </button></NavLink>
                            </li>
                            <li>
                                <NavLink to="/content"><button className="nav-link px-2 text-white link-button">
                                    Features
                                </button></NavLink>
                            </li>
                            <li>
                                <button
                                    href="#"
                                    className="nav-link px-2 text-white link-button"
                                >
                                    Pricing
                                </button>
                            </li>
                            <li>
                            <button
                                    href="#"
                                    className="nav-link px-2 text-white link-button"
                                >                                    
                                    FAQs
                                </button>
                               
                            </li>
                            <li>                            
                                <button
                                    href="#"
                                    className="nav-link px-2 text-white link-button"
                                >
                                    About
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
                        
                        <Avatar style={{margin : "4px"}}
                        src={this.props.currentUser.avatarUrl}
                        />
                        <div>
                            {this.props.isLoggedIn ? (
                                
                                <Button className="btn btn-warning btn-outline-light"
                                title ={
                                    this.props.currentUser.firstName
                                        ? this.props.currentUser.firstName : null}>
                                    <NavLink onClick={this.onLogOutClicked} to="/logout">Logout</NavLink>
                                </Button>
                                ) : (
                                <>
                                <NavLink to="/login"><button type="button" className="btn btn-outline-light me-2">
                                Login
                            </button></NavLink>
                                <NavLink to="/register"><button type="button" className="btn btn-warning">
                                Sign-up
                                </button></NavLink>
                            </>
                            )}
                        </div>


                        <div className="text-end">
                            

                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    }
}

export default withRouter(SiteNavMessage)