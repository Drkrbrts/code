import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

class SiteNav extends React.Component {
  state = {
    location: "",
  };

  render() {
    return (
      <header className="p-3 bg-dark">
        <nav className=" navbar-expand-mdr  navbar-dark bg-dark">
          <div id="navigation">
            <div className="row">
              <div className="col-6 col-sm-12">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/friends">People</NavLink>
                <NavLink to="">Blogs</NavLink>
                <NavLink to="">Tech Co.</NavLink>
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="">Events</NavLink>
              </div>
            </div>
            <div
              className="row"
              style={{ position: "absolute", right: "70px" }}
            >
              <div className="col-6 col-sm-12" style={{ marginTop: "-25px" }}>
                <NavLink to="/login">
                  <button className="btn-nav login" type="button">
                    Login
                  </button>
                </NavLink>
                <NavLink to="/register">
                  <button
                    className="btn-nav register"
                    type="button"
                    style={{ marginLeft: "-10px" }}
                  >
                    Register
                  </button>
                </NavLink>
                <img
                  src="https://pw.sabio.la/images/Sabio.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top image"
                  alt="Sabio"
                  style={{ marginLeft: "30px" }}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(SiteNav);
