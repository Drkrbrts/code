import React from "react"; 
import { NavLink } from "react-router-dom";


function HomeNavBar() {

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark sabio">
        <button className="link-button navbar-brand"></button>
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
          <div>
            <li
              className="nav-item"
              style={{
                marginTop: "10px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <NavLink to="/home">Home</NavLink>
            </li>
          </div>
          
            <div>
            <li
              className="nav-item"
              style={{
                marginTop: "10px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <NavLink to="/friends">Friends</NavLink>
            </li>
          </div>

          <div> 
            <li
              className="nav-item"
              style={{
                marginTop: "10px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </div>

          <div> 
            <li
              className="nav-item"
              style={{
                marginTop: "10px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <NavLink to="/techcompanies">Tech Co</NavLink>
            </li>
          </div>

          <div> 
            <li
              className="nav-item"
              style={{
                marginTop: "10px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <NavLink to="/jobs">Jobs</NavLink>
            </li>
          </div>

          <div> 
            <li
              className="nav-item"
              style={{
                marginTop: "10px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <NavLink to="/events">Events</NavLink>
            </li>
          </div>

        </ul>
        
      </div>
    </nav>
    )
}

export default HomeNavBar; 