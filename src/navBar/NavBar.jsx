import React from "react";
import {NavLink} from "react-router-dom"

class NavBar extends React.Component {

    
    onHomeClick = (e) => {

        console.log("Home was clicked")

        this.props.history.push("/home/")
    }
    onFriendsClick = (e) => {

        console.log("Friends was clicked")

        this.props.history.push("/friends/")
    }

    componentDidUpdat (prevProps) {

        let currentPath = this.props.location.pathname;
        let previousPath = prevProps.location.pathname;

        console.log("buttons", {currentPath, previousPath})

    }

    render () {
        return <React.Fragment>
            <header className="p-3 bg-primary text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <NavLink to="/home/">
                                <button
                                href="#"
                                className="nav-link px-2 text-warning link-button"
                                onClick={this.onHomeClick}
                                >
                                Home
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/friends/">
                                <button className="nav-link px-2 text-white link-button" onClick={this.onFriendsClick}>
                                Friends
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <button
                            href="#"
                            className="nav-link px-2 text-white link-button"
                            >
                            Jobs
                            </button>
                        </li>
                        <li>
                            <button
                            href="#"
                            className="nav-link px-2 text-white link-button"
                            >
                                Events
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
                        
                    </div>
                </div>
            </header>
        </React.Fragment>
    }
}

export default NavBar