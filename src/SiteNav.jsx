import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SiteNav extends Component {

    render() {
        return (
            // <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark sabio">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark sabio">
                <button className="link-button navbar-brand">Sabio</button>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="text-white nav-link" to='/home'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="text-white nav-link" to='/friends'>Friends</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="text-white nav-link" to='/blogs'>Blogs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="text-white nav-link" to='/techCompanies'>Tech Companies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="text-white nav-link" to='/jobs'>Jobs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="text-white nav-link" to='/events'>Events</NavLink>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <div className="nav-item">
                        <NavLink className="text-white nav-link" to="/login">Login</NavLink>
                    </div>
                </div>
            </nav>
        );
    };
};

export default SiteNav;