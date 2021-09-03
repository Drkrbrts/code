
import React from "react";
import { Link } from "react-router-dom";






class NavigationBar extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.login = React.createLog;



    //     onFormSubmitted = (e) => {
    //         e.preventDefault();



        

    // }

        render() {

            return <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div>

                    </div>
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

                                <Link to="/">Home</Link>

                            </li>
                            <li>
                                <button className="nav-link px-2 text-white link-button">
                                    <Link to="/features">Features</Link>
                                </button>
                            </li>
                            <li>
                                <button
                                    href="#"
                                    className="nav-link px-2 text-white link-button"
                                >
                                    <Link to="/pricing">Pricing</Link>
                                </button>
                            </li>
                            <li >
                                <button
                                    href="#"
                                    className="nav-link px-2 text-white link-button"
                                >
                                    <Link to="/faqs">FAQs</Link>
                                </button>
                            </li>
                            <li>
                                <button
                                    href="#"
                                    className="nav-link px-2 text-white link-button"
                                >
                                    <Link to="/about">About</Link>
                                </button>
                            </li>
                        </ul>


                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" onSubmit={this.onFormSubmitted}>
                            <input
                                type="email"
                                className="form-control form-control-dark"
                                placeholder="email"
                                aria-label="Search"
                                ref={this.login}
                            />
                        </form>

                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2">
                                <Link to="/login">Login</Link>
                            </button>
                            <button type="button" className="btn btn-warning">
                                Sign-up
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            

        }

    }








export default NavigationBar;