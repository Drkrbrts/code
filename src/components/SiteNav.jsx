import React from 'react'
import NavLinks from './SiteNav/NavLinks'
import { Link } from "react-router-dom";

function SiteNav(props) {
      function loginClicked() {
      console.log("Login Button Clicked")
      props.history.push("/login")
    }

    function registerClicked() {
      console.log("Register Button Clicked")
      props.history.push("/register")
    }

    return (
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

          
            <NavLinks {...props}></NavLinks>

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
              <button type="button" className="btn btn-outline-light me-2" onClick={loginClicked}>
                Login
              </button>
              </Link>
              <Link to="/register">
              <button type="button" className="btn btn-warning" onClick={registerClicked}>
                Sign-up
              </button>
              </Link>
            </div>
          </div>
      </div>
    )
}

export default SiteNav