import React, {Component} from "react"; 
import { NavLink } from "react-router-dom";


class SiteNav extends Component {

    render() {
        return(

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
                <NavLink to="/login">Log In</NavLink>
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
                <NavLink to="/registration">Registration</NavLink>
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
                  <NavLink to="/friendform">Friend Form</NavLink>
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
                  <NavLink to="/product">Dogs</NavLink>
                </li>
            </div>
 
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 d-none"
              type="text"
              placeholder="Search" 
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 d-none"
              type="submit"
              
            >
              Search
            </button>
          </form>
        </div>
      </nav>
        ); 
    }
}

export default SiteNav; 