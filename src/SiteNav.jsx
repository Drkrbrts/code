import React from "react"
import {NavLink} from "react-router-dom"
import { NavDropdown } from "react-bootstrap";
import 'rc-pagination/assets/index.css'
import "./App.css";
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import LoginCoutrol from "./LoginControl";
import {Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from "reactstrap"
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import * as userService from "./services/userService"


class SiteNav extends React.Component
{
  //...............................................................................

  //............................................................................
  onLogoutClicked = (e) => {
    e.preventDefault();
    userService.logOut().then(this.onLogoutSuccess).catch(this.onLogoutError)
  }
  onLogoutSuccess = (response) =>{
    console.log("Log out success")
    this.props.history.push("/");
  }
  onLogoutError = (error) =>{
    console.log("Log Out fail")
  }

    render()
    {
        return (
            <React.Fragment>
                <header className="p-3 bg-dark text-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                                <img src="https://pw.sabio.la/images/Sabio.png" width="30" height="30" className="d-inline-block align-top m-1" alt="Sabio"/>
                            </a>

                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li>
                                    <NavLink to="/home" className="nav-link px-2 text-secondary link-button">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/friends" className="nav-link px-2 text-secondary link-button">People</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blogs" className="nav-link px-2 text-secondary link-button">Blogs</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/tech" className="nav-link px-2 text-secondary link-button">Tech Co.</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/jobs" className="nav-link px-2 text-secondary link-button">Jobs</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/events" className="nav-link px-2 text-secondary link-button">Events</NavLink>
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
                                
                                {this.props.isLoggedIn ?
                                    (<div>
                                        <div>
                                            <button type="button" className="btn btn-outline-light me-2" onClick={this.onLogoutClicked}>Logout</button>
                                            
                                            <img src = {this.props.currentUser.avatarUrl} width="30" height="30" className="d-inline-block align-top m-1" alt="User"/>
                                            
                                            Wlecome {this.props.currentUser.firstName ? this.props.currentUser.firstName : null}!
                                        </div>
                                    </div>) : 
                                    (<div>
                                        <LoginButton></LoginButton>
                                    </div>)}
                    
                            
                                {/* <label htmlFor="exampleFormControlSelect1">Sabio Fellow</label>
                                <select className="" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>Log Out</option>
                                </select> */}
                            </div>  

                            <div className="text-end">
                                {/* <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    
                                </button> */}
                                
                                {/* <div className="text-end m-2">
                                    <Dropdown >
                                        <DropdownToggle variant="success">
                                        Wlecome {this.props.currentUser.firstName ? this.props.currentUser.firstName : null}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>Yang Yu</DropdownItem>
                                            <DropdownItem header>Yang Yu</DropdownItem>
                                            <DropdownItem header>Yang Yu</DropdownItem>
                                            <DropdownItem header>Yang Yu</DropdownItem>

                                        </DropdownMenu>
                                    </Dropdown>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )  
    }
}

export default SiteNav;