import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

class SiteNav extends React.Component {
  state = {
    search: "",
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;

    this.setState(() => {
      let newState = {};

      newState.search = newValue;

      //   console.log(newState);
      return newState;
    });
  };

  onLogOutClick = () => {
    console.log("logout clicked");
  };

  render() {
    return (
      <header className="p-3" style={{ backgroundColor: `rgb(185,147,201)` }}>
        <nav className=" navbar-expand-mdr ">
          <div id="altNavigation">
            <div className="row">
              <div className="col-sm-12">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/friends">People</NavLink>
                <NavLink to="">Blogs</NavLink>
                <NavLink to="">Tech Co.</NavLink>
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="">Events</NavLink>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  style={{
                    position: "absolute",
                    right: "250px",
                    top: "20px",
                    width: "15%",
                    height: "50px",
                    borderRadius: "10px",
                  }}
                  name="search"
                  onChange={this.onFormFieldChange}
                  value={this.state.search}
                />

                <button
                  className="btn"
                  type="button"
                  style={{
                    borderRadius: "10px",
                    borderColor: "white",
                    color: "white",
                    position: "absolute",
                    right: "130px",
                    top: "20px",
                    height: "50px",
                    width: "100px",
                  }}
                >
                  Search
                </button>
                <NavLink to="/login">
                  <button
                    className="btn"
                    type="button"
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "rgb(131, 104, 143)",
                      color: "white",
                      position: "absolute",
                      right: "20px",
                      top: "20px",
                      height: "50px",
                      width: "100px",
                    }}
                    onClick={this.onLogOutClick}
                  >
                    Logout
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(SiteNav);
