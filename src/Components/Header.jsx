import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



class Header extends React.Component {
    render() {
        return (<header className="p-3 bg-dark text-white">
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
                            <button className="nav-link px-2 text-secondary link-button"> 
                                <Link to="/" className="nav-link px-2 text-white link-button">Home</Link>
                            </button>
                        </li>
                        <li>
                            <button className="nav-link px-2 text-white link-button">
                            </button>
                        </li>
                        <li>
                            <button className="nav-link px-2 text-white link-button">
                            <Link to="/People" className="nav-link px-2 text-white link-button">People</Link>
                            </button>
                        </li>
                        <li>
                            <button className="nav-link px-2 text-white link-button">
                            <Link to="/Blogs" className="nav-link px-2 text-white link-button">Blogs</Link>
                            </button>
                        </li>
                        <li>
                            <button className="nav-link px-2 text-white link-button">
                            <Link to="/TechCo" className="nav-link px-2 text-white link-button">Tech Co.</Link>
                            </button>
                        </li>
                        <li>
                            <button className="nav-link px-2 text-white link-button">
                            <Link to="/Jobs" className="nav-link px-2 text-white link-button">Jobs</Link>
                            </button>
                        </li>
                        <li>
                            <button className="nav-link px-2 text-white link-button">
                            <Link to="/Events" className="nav-link px-2 text-white link-button">Events</Link>
                            </button>
                        </li>
                        <li>
                            <button className="nav-link px-2 text-white link-button">
                            <Link to="/PostWidget" className="nav-link px-2 text-white link-button">Post</Link>
                            </button>
                        </li>
                    </ul>
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">
                        <Link to="/RegisterForm" className="nav-link px-2 text-white link-button">Register</Link>
                        </button>
                        <button type="button" className="btn btn-warning">
                        <Link to="/UserLogin" className="nav-link px-2 text-white link-button">Login</Link>
                        </button>
                    </div>
                </div>
            </div>
        </header>)
    }
}

export default Header