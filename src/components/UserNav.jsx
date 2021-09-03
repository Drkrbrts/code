import React from "react";
import { NavLink} from "react-router-dom"

class UserNav extends React.Component {
 
    render(){
        return <React.Fragment>
             <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
              href="#"
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
                  <NavLink to="/home/1">
                    <button
                      href="#"
                      className="nav-link px-2 text-white link-button"
                    >
                      Home
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/friends/1">
                    <button className="nav-link px-2 text-white link-button">
                      People
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">
                    <button className="nav-link px-2 text-white link-button">
                      Blogs
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/techco">
                    <button className="nav-link px-2 text-white link-button">
                      Tech Co.
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/jobs">
                    <button className="nav-link px-2 text-white link-button">
                      Jobs
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/events">
                    <button className="nav-link px-2 text-white link-button">
                      Events
                    </button>
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
               <NavLink to="/login"><button type="button" className="btn btn-outline-light me-2" onClick={this.logoutUser}>
                    Logout
                  </button>
                  </NavLink> 
              </div>
            </div>
          </div>
        </header>
        </React.Fragment>
    }
}
export default UserNav
