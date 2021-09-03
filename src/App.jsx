import React, { Component } from "react";
// import SiteNav from "./components/SiteNav";
import Jumbo from './components/Jumbo'
import Content from './components/Content'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <header className="p-3 bg-dark text-white">
            {/* <Route path="/" exact={true} component></Route> */}
            {/* <SiteNav {...this.props}></SiteNav> */}
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
              <Link to="/">
                <button
                  href="#"
                  className="nav-link px-2 text-secondary link-button"
                >
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to="/features">
                <button className="nav-link px-2 text-white link-button">
                  Features
                </button>
              </Link>
            </li>
            <li>
            <Link to="/pricing">
              <button
                href="#"
                className="nav-link px-2 text-white link-button"
              >
              Pricing
              </button>
            </Link>
            </li>
            <li>
              <Link to="/faqs">
              <button
                href="#"
                className="nav-link px-2 text-white link-button"
              >
                FAQs
              </button>
              </Link>
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
            {/* <NavLinks {...props}></NavLinks> */}

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <Link to="/login">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              </Link>
              <Link to="/sign-up">
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
              </Link>
            </div>
          </div>
      </div>
          </header>

          <main role="main">
            <Jumbo></Jumbo>
            <Content></Content>
          </main>
          <Footer></Footer>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
