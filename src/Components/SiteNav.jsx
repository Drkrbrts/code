import React from 'react';
import { NavLink } from 'react-router-dom';


class SiteNav extends React.Component {


    onLogout = (e) => {
        e.preventDefault();
        this.props.isLoggedOut()
    }

    mainContent = () => {
        return (
            <React.Fragment>
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
                        <NavLink
                            to="/"
                            className="nav-link px-2 text-secondary link-button"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/friends"
                            className="nav-link px-2 text-white link-button"
                        >
                            Friends
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blogs"
                            className="nav-link px-2 text-white link-button"
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tech-companies"
                            className="nav-link px-2 text-white link-button"
                        >
                            Tech Companies
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/jobs"
                            className="nav-link px-2 text-white link-button"
                        >
                            Jobs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/events"
                            className="nav-link px-2 text-white link-button"
                        >
                            Events
                        </NavLink>
                    </li>
                </ul>
            </React.Fragment>
        )
    }

    conditionalContent = () => {
        const isLogged = this.props.isLogged
        return (
            <React.Fragment >
                {isLogged
                    ? (
                        <div className="text-end">
                            <button
                                type="button"
                                className="btn btn-outline-light"
                                onClick={this.onLogout}
                            >Log out
                            </button>
                        </div>
                    )
                    : (
                        <div className="text-end">
                            <NavLink
                                to="/login"
                                className="btn btn-outline-light me-2"
                            >Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="btn btn-warning"
                            >Sign-up
                            </NavLink>
                        </div>
                    )
                }
            </React.Fragment >
        )
    }

    render() {
        return (
            <React.Fragment>
                <header className="p-3 bg-dark text-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                            {this.mainContent()}
                            {this.conditionalContent()}

                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default SiteNav;