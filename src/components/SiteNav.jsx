import React from 'react'
import {NavLink}  from 'react-router-dom';


function SiteNav(props){

  /* var onLogin = (e) => {
    const data = {
      "email": "carlosjimenez170@yahoo.com",
      "password": "Naruto!2",
      "tenantId": "U026KJPV4BY"
    }

    userService.logIn(data)
    .then(onLoginSuccess)
    .catch(onLoginError)
  }

  function onLoginSuccess(response){
    console.log(response)
  }
  function onLoginError(response){
    console.log({error: response})
  } */  

  
  
    return(
    <React.Fragment>
    <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <NavLink
          to='/'
          className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <img
            src="https://pw.sabio.la/images/Sabio.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Sabio"
          />
        </NavLink>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink
              to="/home"
              className="nav-link px-2 text-secondary link-button"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/friends" className="nav-link px-2 text-white link-button">
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
              to='/techco'
              className="nav-link px-2 text-white link-button"
            >
              Tech Co.
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

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            className="form-control form-control-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div className="text-end">
          <NavLink to='/login' type="button" className={`btn btn-outline-light me-2 ${props.isLoggedIn ? 'd-none' : ''}`}>
            Login
          </NavLink>
          <NavLink to='/register' type="button" className={`btn btn-warning ${props.isLoggedIn ? 'd-none': ''}`}>
            Sign-up
          </NavLink>
          <NavLink to='/login' type='button' className={`btn btn-warning ${props.isLoggedIn ? '': 'd-none'}`} onClick={props.logout}>Logout</NavLink>
        </div>
      </div>
    </div>
  </header>
  </React.Fragment>)
}

export default SiteNav;