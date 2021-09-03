import React from "react";
import {NavLink} from "react-router-dom";
import { withRouter } from "react-router-dom"

class SiteNav extends React.Component{
    
    state={
        location: ""
    }

    render()
    {

        return (
            <header className="p-3 bg-dark">
               <nav className=" navbar-expand-mdr  navbar-dark bg-dark">
                    <div id="navigation">
                        <div className="row">
                            <div className = "col-6 col-sm-12">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/friends/new">People</NavLink>
                                <NavLink to="">Blogs</NavLink>
                                <NavLink to="">Tech Co.</NavLink>
                                <NavLink to="">Jobs</NavLink>
                                <NavLink to="">Events</NavLink>
                            </div>
                        </div>
                        <div className="row" style={{ position:"absolute", right:"30px"}}> 
                            <div className="col-6 col-sm-12" style={{marginTop: "-25px"}}> 
                                <NavLink to="./login">
                                <button className="btn-nav login"  type="button">
                                    Login
                                </button>
                                </NavLink>
                                <NavLink to="./register">
                                <button className="btn-nav register" type="button">
                                    Register
                                </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
};

export default withRouter(SiteNav);